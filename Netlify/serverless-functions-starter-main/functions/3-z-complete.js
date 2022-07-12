require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
    .base('appcqUCp35FvryoQo')
    .table('products');

    // Merging files 3-airtable.js and 3-product.js
exports.handler = async (event, context, cb) => {
    // 3-product.js code
    const {id} = event.queryStringParameters;
    if(id) {
        try {
            const product = await airtable.retrieve(id);
            if(product.error) {
                return {
                    statusCode: 404,
                    body: `No product with id: ${id}`,
                }
            }
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Server Error',
            }
        }
    }

    // 3-airtable.js code
    try {
        const {records} = await airtable.list();
        const products = records.map((product) => {
            const {id} = product;
            const {name, image, price} = product.fields;
            const url = image[0].url;
            return {id, name, url, price};
        });
        return {
            statusCode: 200,
            body: JSON.stringify(products),
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server Error',
        }
    }
}
