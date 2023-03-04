import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "Publicasa Docs: %s",
            };
        } else {
            return {
                titleTemplate:
                    "Publicasa Docs: Herramientas para desarrolladores",
                description:
                    "Integra nuestras herramientas especializadas de venta y alquiler de inmuebles en línea con tu plataforma o aplicación. Nuestras integraciones están diseñadas para brindarte la flexibilidad y personalización que necesitas para hacer crecer tu negocio de bienes raíces en línea.",
            };
        }
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter();
        const { frontMatter } = useConfig();
        const url =
            "https://docs.publicasa.com.co" +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
        const description =
            frontMatter.description ||
            "Integra todas nuestras herramientas y planes especializados para vender y alquilar un inmueble online en tu aplicación o plataforma.";
        return (
            <>
                <meta property="og:url" content={url} />
                <meta
                    property="og:title"
                    content={
                        frontMatter.title ||
                        "Publicasa Docs: Herramientas para desarrolladores"
                    }
                />
                <meta
                    name="keywords"
                    content="arriendo, vender, arrendar, publicasa, inmueble, venta de inmueble, casas en venta, bienes raíces, apartamentos en venta, vender casa, vender apartamento, búsqueda de propiedades, inmobiliaria"
                />
                <meta property="og:description" content={description} />
                <meta name="description" content={description} />
                <meta
                    property="og:image"
                    content="https://cdn.publicasa.com.co/assets/img/public/ogimage.jpg"
                />
                <link
                    rel="icon"
                    href="https://cdn.publicasa.com.co/assets/img/public/logo/favicon.ico"
                />
                <link
                    rel="apple-touch-icon"
                    href="https://cdn.publicasa.com.co/assets/img/public/logo/logo192.png"
                />
                <meta name="author" content="publicasa S.A.S" />
                <meta name="robots" content="index, follow" />
            </>
        );
    },
    logo: (
        <>
            <img
                src="https://cdn.publicasa.com.co/assets/img/public/logo/docs.svg"
                alt="Publicasa Docs"
                id="light-publicasa-logo"
            />
            <img
                src="https://cdn.publicasa.com.co/assets/img/public/logo/docs_negative.svg"
                alt="Publicasa Docs"
                id="dark-publicasa-logo"
            />
        </>
    ),
    logoLink: "https://docs.publicasa.com.co/",
    project: {
        link: "https://github.com/publicasacol",
    },
    docsRepositoryBase: "https://github.com/publicasacol/docs/blob/main",
    footer: {
        text: (
            <span>
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://nextra.site" target="_blank">
                    publicasa S.A.S
                </a>
                . Todos los derechos reservados.
            </span>
        ),
    },
    search: {
        placeholder: "Buscar documentación...",
    },
    banner: {
        key: "beta-api-release",
        text: (
            <a href="https://publicasa.com.co/solicitudes/" target="_blank">
                🎉 publicasa API beta disponible. Solicitar demostración →
            </a>
        ),
    },
    toc: {
        title: "En Esta Página",
    },
    primaryHue: {
        light: 261,
        dark: 107
    },
    feedback: {
        content: "¿Dudas? Danos tu feedback →",
    },
    editLink: {
        text: "Edite esta página en GitHub →",
    },
};

export default config;
