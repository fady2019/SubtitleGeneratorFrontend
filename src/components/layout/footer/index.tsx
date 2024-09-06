const FooterContainer = () => {
    return (
        <footer className="absolute bottom-0 left-0 w-full border-t border-amber-700 bg-violet-950 py-4">
            <div className="container">
                <div className="text-center text-lg">
                    Built with love by{' '}
                    <a href="https://github.com/fady2019" target="_blank" className="text-amber-500 underline">
                        Fady Emad
                    </a>{' '}
                    &#129505;
                </div>
            </div>
        </footer>
    );
};

export default FooterContainer;
