import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';

export default () => {
    const posts = useStaticQuery(graphql`
        query {
            allContentfulPosts(
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
        ) {
            edges {
                node {
                    title
                    author
                    publishedDate(formatString: "MMMM Do, YYYY")
                    slug
                }
            }
            }
        }
    `)
    return (
        <div>
            <Head title="Blog"/>

            <h1>Blog</h1>
            <Link to="/">Index</Link>
            <ol>
                {posts.allContentfulPosts.edges.map( post => {
                    return <li><Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link></li>
                }) }
            </ol>
        </div>
    )


} 
