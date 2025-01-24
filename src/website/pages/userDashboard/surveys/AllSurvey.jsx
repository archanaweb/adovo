
import '../dashboard/dashboard.css'
import { IoPlay } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import OfferModal from '../../../components/userDdashboard/OfferModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOfferList } from '../../../../redux/user/offerSlice';
import { fetchSurveyList } from '../../../../redux/user/surveySlice';
import { Link } from 'react-router-dom';
const AllSurvey = () => {
    const surveyColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
    const surveyList = useSelector(state => state.survey.surveyList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSurveyList())
    }, [])
    return (
        <>
        <div className='offers-box mb-12 md:p-6 p-4'>
                    <h5 className='text-2xl text-white text-left pb-6 font-bold'>All Surveys</h5>
                   <div className="flex gap-4 items-wrapper flex-wrap">
                {surveyList?.map((item, index)=> 
                 <div className='item' key={item?.id}>
                                            <Link to={`/survey/${item?.id}`}><div className='offer-hover'>
                                                <div className='offer-start-icon'>
                                                    <IoPlay />       
                                                </div>
                                                <p>Start Survey</p>
                                            </div></Link>
                                            <div className='survey-img' style={{backgroundColor: surveyColors[index]}}>
                                                {/* <img src={item?.offer_image} alt='offerimg' /> */}
                                                <GiTakeMyMoney />
                                            </div>
                                            <div className='offer-content'>
                                                <p className='survey_name'>LIVE SURVEY</p>
                                                <div className='text-left flex justify-between items-center'>
                                                <span>{item?.loi} min</span>
                                                <p className='offer-price'>
                                                    ${item?.cpi}
                                                </p>
                                                </div>
                                                
                                            </div>
                                        </div>) }
                        </div>
                    
                </div>
        </>
    )
}
export default AllSurvey