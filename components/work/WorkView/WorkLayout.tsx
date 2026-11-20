type WorkLayoutProps = {
    header: React.ReactNode;
    media: React.ReactNode;
    details: React.ReactNode;
    footer?: React.ReactNode;
};

/** Grilla de la página de obra, compartida por la vista y su placeholder. */
export const WorkLayout = ({ header, media, details, footer }: WorkLayoutProps) => (
    <main className="w-full border-b border-black/10">
        {header}

        <div className="flex w-full items-start tablet:flex-col">
            <div className="w-3/5 tablet:w-full border-r border-black/10 tablet:border-r-0">
                {media}
            </div>
            <div className="sticky top-0 w-2/5 tablet:static tablet:w-full">
                {details}
            </div>
        </div>

        {footer}
    </main>
);
