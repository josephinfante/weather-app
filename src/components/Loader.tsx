const LoadingSpinner: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75 z-50">
            <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12"></div>
        </div>
    );
};

export default LoadingSpinner;
