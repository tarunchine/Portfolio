import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!) {
        contentfulPosts(
                    slug: {
                        eq: $slug
                    }
            ) {
                title
                content {
                    json
                }
        }
    }`;

const Blog = (props)=> {
    const options = {
        renderNode: {
            'embedded-asset-block': (node)=> {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img src={url} alt={alt} />
            }
        }
    }
    return (
        <div>
            <Head title={props.data.contentfulPosts.title}/>
            <h3>{props.data.contentfulPosts.title}</h3>
            {/* <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div> */}
            { documentToReactComponents(props.data.contentfulPosts.content.json, options) }
        </div>
    )
}
export default Blog;