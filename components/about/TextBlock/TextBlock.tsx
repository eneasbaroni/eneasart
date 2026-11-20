type TextBlockProps = {
    paragraphs: string[];
};

export const TextBlock = ({ paragraphs }: TextBlockProps) => (
    <div className="flex flex-col gap-5">
        {paragraphs.map((paragraph) => (
            <p
                key={paragraph.slice(0, 32)}
                className="font-feature-display text-base tablet:text-sm leading-relaxed"
            >
                {paragraph}
            </p>
        ))}
    </div>
);
