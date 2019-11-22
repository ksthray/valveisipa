const { slugify } = require('./src/utils/utilityFunctions');
const path = require('path')
const authors = require('./src/utils/authors') 
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
    const {createNodeField} = actions
    if(node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title) 
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
}
exports.createPages = ({ actions, graphql}) => {
    const { createPage } = actions;
    const templates = {
        singlePost: path.resolve('src/templates/single-post.js'),
        postListe: path.resolve('src/templates/post-liste.js')
    }

    return graphql(`
        {
            allMarkdownRemark {
                edges{
                    node{
                        frontmatter{
                            author
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors) 

        const posts = res.data.allMarkdownRemark.edges 

        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: templates.singlePost,
                context: {
                    //Passer le slug pour la template to use to get post 
                    slug: node.fields.slug,
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                }
            })
        })

        const postsPerPage = 2
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length : numberOfPages}).forEach((_, index) => {
            const isFirstPage = index === 0
            const currentPage = index + 1

            if(isFirstPage) return 

            createPage({
                path: `/page/${currentPage}`,
                component: templates.postListe,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    currentPage,
                    numberOfPages
                }
            })
        })
    })
}