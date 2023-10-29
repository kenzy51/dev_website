const {i18n} = require('./next-i18next.config');
module.exports = {
	trailingSlash: true,
	eslint: { 
		ignoreDuringBuilds: true 
	},
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dkrkceyqn/image/upload',
    CLOUD_NAME: 'dkrkceyqn',
    UPLOAD_PRESET:'ml_default',
    JWT_SECRET: 'adfjdsjfsdjfkladjfkj',
	},
	i18n
};
