import React from 'react';
interface IframeProps extends React.HTMLAttributes<HTMLIFrameElement> {
    onInferredClick: (iframe: HTMLIFrameElement) => void;
}
export default function Iframe(props: IframeProps): React.ReactElement;
export {};
