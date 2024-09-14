import axios from "axios";
import { getTvSeriesUrlByType, SERIES_TYPE, TBMD_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addArrivingtodaySeries, addOnTheAirSeries, addPopularSeries, addTopRatedSeries, addTopRateMovie, addUpcomingMovie } from "../store/movieSlice";
import { useEffect } from "react";

const useTvSeriesByType = (type) => {
    const dispatch = useDispatch();
    const getPopularTvSeries = async () => {
        const movies = await axios(getTvSeriesUrlByType(type), TBMD_OPTIONS);
        switch (type) {
            case SERIES_TYPE[0]:
                dispatch(addArrivingtodaySeries(movies?.data?.results));
                break;
            case SERIES_TYPE[1]:
                dispatch(addOnTheAirSeries(movies?.data?.results));
                break;
            case SERIES_TYPE[2]:
                dispatch(addPopularSeries(movies?.data?.results));
                break;
            case SERIES_TYPE[3]:
                dispatch(addTopRatedSeries(movies?.data?.results));
                break;
        }
    };

    useEffect(() => {
        getPopularTvSeries();
    }, []);
};

export default useTvSeriesByType;
