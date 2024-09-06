import AuthPageLayout from '@/components/shared/auth-page-layout';
import InformationSection from '@/components/settings/sections/information';
import PasswordSection from '@/components/settings/sections/password';

const SettingsContainer = () => {
    return (
        <AuthPageLayout>
            <div className="flex flex-col gap-10">
                <InformationSection />
                <PasswordSection />
            </div>
        </AuthPageLayout>
    );
};

export default SettingsContainer;
