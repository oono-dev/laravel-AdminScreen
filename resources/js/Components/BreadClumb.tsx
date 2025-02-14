import { PropsWithChildren } from 'react';
import { Card } from './ui/card';

const BreadClumb = ({ children }: PropsWithChildren) => {
    return (
        <Card className="ml-4 mt-4 h-14 w-1/2 p-4">
            {children ?? 'パンくずリスト未設定'}
        </Card>
    );
};

export default BreadClumb;
