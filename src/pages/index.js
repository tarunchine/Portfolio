import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import '../styles/index.scss';
import Head from '../components/head';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)
    return (
        <div>
            <Head title="Home"/>
            Hello world!!!
            <p>
                {data.site.siteMetadata.title}
            </p>
            <p>
                {data.site.siteMetadata.author}
            </p>
            <Link to="/blog">blog</Link>
        </div>
    )
} 
