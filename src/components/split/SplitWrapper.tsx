import Split from "split.js";
import React, {useEffect, useRef, useState} from "react";

export interface SplitProps extends Split.Options {
}

export const SplitWrapper: React.FC<SplitProps> = (props) => {

    const ref = useRef<HTMLDivElement>(null);
    const [split, setSplit] = useState(null);

    useEffect(() => {
        const {children, gutter, ...options} = props;

        props.gutter = (index, direction) => {
            let gutterElement: HTMLElement;

            if (gutter) {
                gutterElement = gutter(index, direction)
            } else {
                gutterElement = document.createElement('div')
                gutterElement.className = `gutter gutter-${direction}`
            }

            // eslint-disable-next-line no-underscore-dangle
            //gutterElement.__isSplitGutter = true
            return gutterElement
        }

        setSplit(Split(ref.current.children, props));
    })

    const {
        sizes,
        minSize,
        gutterSize,
        snapOffset,
        direction,
        cursor,
        gutter,
        elementStyle,
        gutterStyle,
        onDrag,
        onDragStart,
        onDragEnd,
        children,
        ...rest
    } = props;

    return (
        <div
            ref={ref}
            {...rest}
        >
            {children}
        </div>
    )
}