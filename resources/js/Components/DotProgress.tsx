const DotProgress = ({
    color,
}: {
    color?: 'white' | 'black' | 'red' | 'blue' | 'green' | 'yellow' | null;
}) => {
    const showColor = () => {
        switch (color) {
            case 'white':
                return 'bg-white';
            case 'black':
                return 'bg-black';
            case 'red':
                return 'bg-red-500';
            case 'blue':
                return 'bg-blue-500';
            case 'green':
                return 'bg-green-500';
            case 'yellow':
                return 'bg-yellow-500';
            default:
                return 'bg-white';
        }
    };

    return (
        <div className="flex justify-center" aria-label="読み込み中">
            <div
                className={`rounded-ful h-1 w-1 animate-ping ${showColor()}`}
            ></div>
            <div
                className={`mx-4 h-1 w-1 animate-ping rounded-full ${showColor()}`}
            ></div>
            <div
                className={`h-1 w-1 animate-ping rounded-full ${showColor()}`}
            ></div>
        </div>
    );
};

export default DotProgress;
