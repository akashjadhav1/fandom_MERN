const AllData = require("../models/allData.model");

const addAllMediaData = async (req, res) => {
  try {
    const {
      adult,
      backdrop_path,
      genre_ids,
      id,
      poster_path,
      original_name,
      overview,
      media_type,
      original_language,
      name,
      popularity,
      first_air_date,
      vote_average,
      vote_count,
      origin_country,
      video,
    } = req.body;

    // Create the movie or TV show entry
    const allMovieAndTvData = {
      adult,
      backdrop_path,
      genre_ids,
      id,
      poster_path,
      original_name,
      overview,
      media_type,
      original_language,
      name,
      popularity,
      first_air_date,
      vote_average,
      vote_count,
      origin_country,
      video,
    };

    const newEntry = await AllData.create(allMovieAndTvData);
    return res
      .status(201)
      .send({ message: "Movie or TV show added successfully", data: newEntry });
  } catch (error) {
    return res
      .status(500)
      .send({
        message: "Error adding movies and TV shows",
        error: error.message,
      });
  }
};


const getAllMediaData = async (req, res) => {
  try {
    const allEntries = await AllData.find();
    return res.status(200).send({ data: allEntries });
  } catch (error) {
    return res.status(500).send({
      message: "Error retrieving movies and TV shows",
      error: error.message,
    });
  }
};




module.exports = {addAllMediaData,getAllMediaData}