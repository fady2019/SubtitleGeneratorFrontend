import { useSelector } from 'react-redux';

import SettingSection from '@/components/settings/sections/SettingSection';
import Form from '@/components/ui/form';
import Input from '@/components/ui/input';

import { TAppStore } from '@/store/types';

import { FaAt, FaEnvelope } from 'react-icons/fa';

const InformationSectionContainer = () => {
    const { first_name, last_name, email, username } = useSelector((store: TAppStore) => store.user.userInfo)!;

    return (
        <SettingSection sectionTitle="Information">
            <Form
                formConfig={{ initialValues: { first_name, last_name, email, username } }}
                className="flex flex-col gap-5"
            >
                <div className="flex flex-col gap-5 sm:flex-row">
                    <Input type="text" name="first_name" id="first-name" placeholder="First Name" disabled />
                    <Input type="text" name="last_name" id="last-name" placeholder="Last Name" disabled />
                </div>

                <Input Icon={FaAt} type="text" name="username" id="username" placeholder="Username" disabled />

                <Input Icon={FaEnvelope} type="email" name="email" id="email" placeholder="Email" disabled />
            </Form>
        </SettingSection>
    );
};

export default InformationSectionContainer;
