import React, { useState } from "react";

interface TabContentProps {
    label: string;
    children: React.ReactNode;
}

interface TabsProps {
    contents: TabContentProps[];
    defaultIndex?: number;
    onChange?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ contents, defaultIndex = 0, onChange, }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <div>
            <ul>
                {contents.map((content, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveIndex(index);
                                if (onChange) {
                                    onChange(index);
                                }
                            }}
                        >
                            {content.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {contents[activeIndex].children}
            </div>
        </div>
    );
};