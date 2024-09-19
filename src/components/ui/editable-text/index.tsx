import React, { useEffect, useRef, useState } from 'react';

import { TEditableTextProps } from '@/components/ui/editable-text/types';

import { FaCheck } from 'react-icons/fa6';
import { HiPencil } from 'react-icons/hi';

const EditableTextContainer: React.FC<TEditableTextProps> = (props) => {
    let { initText, editable, textUpdateHandler } = props;
    editable ??= true;

    const textElementRef = useRef<HTMLParagraphElement>(null);
    const [focused, setFocused] = useState(false);

    const contentChanged = !!textElementRef.current?.textContent && textElementRef.current.textContent !== initText;

    useEffect(() => {
        if (!focused) {
            return;
        }

        textElementRef.current?.focus();
    }, [focused]);

    const handleTextEditing = () => {
        if (!textElementRef.current?.textContent || !editable) {
            return;
        }

        textUpdateHandler(textElementRef.current?.textContent);
    };

    const handleNewLinePreventing = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
        if (event.key !== 'Enter') {
            return;
        }

        event.preventDefault();
        setFocused(false);
    };

    return (
        <div className="inline-flex items-center">
            <p
                ref={textElementRef}
                className="p-1"
                contentEditable={focused && editable}
                onClick={setFocused.bind(null, editable)}
                onFocus={setFocused.bind(null, true)}
                onBlur={setFocused.bind(null, false)}
                onKeyDown={handleNewLinePreventing}
                dangerouslySetInnerHTML={{ __html: initText }}
            />

            {!focused && (
                <span className="p-1">
                    {editable && !contentChanged && (
                        <HiPencil
                            className="cursor-pointer text-base"
                            title="Edit"
                            onClick={setFocused.bind(null, editable)}
                        />
                    )}
                    {contentChanged && (
                        <FaCheck className="cursor-pointer text-base" title="Save" onClick={handleTextEditing} />
                    )}
                </span>
            )}
        </div>
    );
};

export default EditableTextContainer;
