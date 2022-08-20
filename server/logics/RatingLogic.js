import RatingDataAccess from "../dataaccess/RatingDataAccess.js";

class RatingLogic {
  #ratingDataAccess = new RatingDataAccess();
  constructor() {}

  /**
   *
   * @param {string} productId
   * @return {number} average of all ratings of a product
   */
  async getRating(productId) {
    const ratings = await this.#ratingDataAccess.list(productId);

    if (ratings.length === 0) {
      return 0;
    } else {
      let sumRatings = 0;
      ratings.forEach((el) => (sumRatings += el.rating));
      return sumRatings / ratings.length;
    }
  }
}

export default RatingLogic;
