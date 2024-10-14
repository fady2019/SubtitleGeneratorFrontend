import { Dispatch } from '@reduxjs/toolkit';

import appStore from '@/store';
import AxiosUtil from '@/utils/axios';
import { storeSubtitlesSliceActions } from '@/store/slices/subtitles';

import { TSubtitle, TSubtitleSegment } from '@/types/subtitle';
import { TGenerateSubtitleData } from '@/components/subtitles/generate/types';
import { TNavigateFunction } from '@/routes/navigation/types';

export const fetchSubtitles = () => {
    return async (dispatch: Dispatch) => {
        const { data, success } = await AxiosUtil.sendRequest({
            url: 'api/subtitles',
        });

        if (!success) {
            return;
        }

        dispatch(storeSubtitlesSliceActions.putSubtitles(data));
    };
};

export const fetchSubtitle = (subtitleId: string, navigate: TNavigateFunction) => {
    return async (dispatch: Dispatch) => {
        const { data, success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${subtitleId}`,
        });

        if (!success) {
            navigate('/@me');
            return;
        }

        dispatch(storeSubtitlesSliceActions.setOpenedSubtitle(data));
    };
};

export const generateSubtitle = (subtitleData: TGenerateSubtitleData<File>, navigate: TNavigateFunction) => {
    return async () => {
        const formData = new FormData();
        formData.append('title', subtitleData.title);
        formData.append('media_file', subtitleData.file);
        formData.append('translate', String(subtitleData.translate));

        const { success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/begin-generation`,
            method: 'POST',
            data: formData,
        });

        if (!success) {
            return;
        }

        navigate('/@me');
    };
};

export const regenerateSubtitle = (subtitleId: string) => {
    return async (dispatch: Dispatch) => {
        const { success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${subtitleId}/rebegin-generation`,
            method: 'POST',
        });

        if (!success) {
            return;
        }

        dispatch(storeSubtitlesSliceActions.updateSubtitle({ id: subtitleId, subtitle: { status: 'scheduled' } }));
    };
};

export const editSubtitle = (subtitleId: string, subtitleData: Partial<TSubtitle>) => {
    return async (dispatch: Dispatch) => {
        const { data, success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${subtitleId}/edit`,
            method: 'PUT',
            data: subtitleData,
        });

        if (!success) {
            return;
        }

        dispatch(storeSubtitlesSliceActions.updateSubtitle({ id: subtitleId, subtitle: data }));
    };
};

export const cancelSubtitle = (subtitleId: string) => {
    return async (dispatch: Dispatch) => {
        const { success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${subtitleId}/cancel-generation`,
            method: 'DELETE',
        });

        if (!success) {
            return;
        }

        dispatch(
            storeSubtitlesSliceActions.updateSubtitle({
                id: subtitleId,
                subtitle: { status: 'canceled', start_date: null },
            })
        );
    };
};

export const deleteSubtitle = (subtitleId: string) => {
    return async (dispatch: Dispatch) => {
        const { success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${subtitleId}/delete`,
            method: 'DELETE',
        });

        if (!success) {
            return;
        }

        dispatch(storeSubtitlesSliceActions.deleteSubtitle(subtitleId));
    };
};

export const fetchOpenedSubtitleNextSegmentsPage = () => {
    return async (dispatch: Dispatch) => {
        const openedSubtitleId = appStore.getState().subtitles.openedSubtitle?.id;
        const { page, itemsPerPage, segmentSearch, hasNext } = appStore.getState().subtitles.openedSubtitleSegments;

        if (!openedSubtitleId || !hasNext) {
            return;
        }

        const { data, success } = await AxiosUtil.sendRequest(
            {
                url: `api/subtitles/${openedSubtitleId}/segments`,
                params: {
                    page: page + 1,
                    items_per_page: itemsPerPage,
                    segment_search: segmentSearch,
                },
            },
            { hideSuccessMsg: true, hideSpinner: true }
        );

        if (!success) {
            return;
        }

        dispatch(
            storeSubtitlesSliceActions.addNewSubtitleSegmentsPage({
                segments: data.segments,
                hasNext: data.has_next,
            })
        );
    };
};

export const editOpenedSubtitleSegment = (segmentId: number, segmentData: Partial<TSubtitleSegment>) => {
    return async (dispatch: Dispatch) => {
        const openedSubtitleId = appStore.getState().subtitles.openedSubtitle?.id;

        if (!openedSubtitleId) {
            return;
        }

        const { data, success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${openedSubtitleId}/segments/${segmentId}/edit`,
            method: 'PUT',
            data: segmentData,
        });

        if (!success) {
            return;
        }

        dispatch(storeSubtitlesSliceActions.updateSubtitleSegment({ id: segmentId, segment: data }));
    };
};

export const downloadSubtitleFile = (subtitleId: string, fileType: string) => {
    return async () => {
        const { response, success } = await AxiosUtil.sendRequest({
            url: `api/subtitles/${subtitleId}/segments/as-file?file_type=${fileType}`,
            method: 'GET',
            responseType: 'blob',
        });

        if (!success) {
            return;
        }

        AxiosUtil.downloadResponseFile(response);
    };
};
