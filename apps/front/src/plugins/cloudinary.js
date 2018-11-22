export default ({ env }, inject) => {
  const cloudinary = {
    getSrc() {
      return this.getImageUrl();
    },
    getRootUrl() {
      const isHttps = process.env.NODE_ENV === 'production' ? 'https' : 'http';

      return `${isHttps}://res.cloudinary.com/${env.CLOUDINARY.CLOUD_NAME}/image/upload/`;
    },
    getTransformationString(transformations) {
      const transformationArray = Object.keys(transformations)
        .map((key) => {
          return `${key}_${transformations[key]}`;
        });

      return transformationArray.join(',');
    },
    getImageUrl(publicId, transformations = {}) {
      return `${this.getRootUrl()}${this.getTransformationString(transformations)}/${publicId}`;
    },
  };

  inject('cloudinary', cloudinary);
};
