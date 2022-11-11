import React, { FC } from "react";

export const Text: FC<{ text: string }> = ({ text }) => {
    return <p className="c-sidebar__text">{text}</p>;
};

export const Title: FC<{ title: string }> = ({ title }) => {
    return <h2 className="c-sidebar__title">{title}</h2>;
};

export const Subtitle: FC<{ subtitle: string }> = ({ subtitle }) => {
    return <h2 className="c-sidebar__subtitle">{subtitle}</h2>;
};

export const Image: FC<{
    images: {
        src: any;
        alt?: string;
        customWidth?: string;
        customHeight?: string;
        title?: string;
    }[];
}> = ({ images }) => {
    return (
        <div className="c-sidebar__image-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="c-sidebar__image-item"
                    style={{
                        width: image.customWidth ? `${image.customWidth}` : "",
                        height: image.customHeight
                            ? `${image.customHeight}`
                            : "",
                    }}
                >
                    {image.title && (
                        <p className="c-sidebar__image-title">{image.title}</p>
                    )}
                    <img
                        className="c-sidebar__image-img"
                        src={image.src}
                        alt={image.alt ? image.alt : image.src}
                    />
                </div>
            ))}
        </div>
    );
};

export const List: FC<{ listArray: string[] }> = ({ listArray }) => {
    return (
        <ul className="c-sidebar__list">
            {listArray.map((list, index) => (
                <li
                    key={index}
                    className="c-sidebar__list-item c-sidebar__text"
                >
                    {list}
                </li>
            ))}
        </ul>
    );
};

export const CustomLink: FC<{ href: string }> = ({ href }) => {
    return (
        <a
            className="button--link c-sidebar__link"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
        >
            <p>{href}</p>
        </a>
    );
};

export const Video: FC<{ src: string }> = ({ src }) => {
    return (
        <>
            <video controls={true}>
                <source src={src} type="video/mp4" />
            </video>
        </>
    );
};

export const IframeVideo: FC<{ src: string }> = ({ src }) => {
    return (
        <iframe
            className="c-sidebar__youtube-video"
            src={src}
            scrolling="no"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export const Spacer: FC<{ x?: number }> = ({ x = 1 }) => (
    <span style={{ padding: `${x * 5}px`, display: "block" }}></span>
);
