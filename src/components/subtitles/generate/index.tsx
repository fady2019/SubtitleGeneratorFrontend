import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Section from '@/components/shared/section';
import Form from '@/components/ui/form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

import { generateSubtitle } from '@/store/slices/subtitles/actions';
import useNavigate from '@/routes/navigation/useNavigate';

import { TFormOnSubmit } from '@/components/ui/form/types';
import { TGenerateSubtitleData } from '@/components/subtitles/generate/types';
import { TAppDispatch } from '@/store';

const GenerateSubtitleContainer = () => {
    const audioInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();

    const initialValues: TGenerateSubtitleData<string> = { title: '', file: '' };

    const validationSchema = Yup.object({
        title: Yup.string().trim().required('this field is required'),
        file: Yup.string().required('this field is required'),
    });

    const handleSubtitleGeneration: TFormOnSubmit<TGenerateSubtitleData<string>> = (values) => {
        const subtitleData = { ...values, file: audioInputRef.current?.files?.item(0)! };
        dispatch(generateSubtitle(subtitleData, navigate));
    };

    return (
        <Section>
            <div className="mx-auto w-[30rem] max-w-full">
                <h2 className="p-8 pt-0 text-center text-3xl font-semibold text-amber-500">Generate Subtitle</h2>

                <Form
                    className="flex flex-col gap-5"
                    formConfig={{ initialValues, validationSchema, onSubmit: handleSubtitleGeneration }}
                >
                    <Input type="text" name="title" placeholder="Title" />
                    <Input ref={audioInputRef} type="file" name="file" accept="audio/*, video/*" />
                    <Button className="mt-2.5" large>
                        Generate
                    </Button>
                </Form>
            </div>
        </Section>
    );
};

export default GenerateSubtitleContainer;
