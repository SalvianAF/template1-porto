import { useEffect, useState, useRef } from 'react';
import styles from './carousel.module.css';
import { Slide, Box } from '@mui/material';

let index = 0
export default function Carousel(props) {
    const [contents, setContents] = useState([{id:1,color:"red"},{id:2,color:"white"},{id:3,color:"yellow"},{id:4,color:"blue"}])
    // const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState("")
    const [leftSlide, setLeftSlide] = useState({})
    const [middleSlide, setMiddleSlide] = useState({})
    const [rightSlide, setRightSlide] = useState({})
    const [check, setCheck] = useState(true)
    const [inOutDirection, setInOutDirection] = useState("") //for sliding in and out direction
    // const [interval, setInterval] = useState(9000)
    const containerLeftRef = useRef(null);
    const containerRightRef = useRef(null);
    const containerMiddleRef = useRef(null);

    useEffect(() => {
        setLeftSlide(contents[contents.length-1])
        setMiddleSlide(contents[index])
        setRightSlide(contents[index+1])
        // index++
        // setInterval(() => {
        //     setDirection('right')
        //   }, 10000);
    },[])

    useEffect(() => {
        if (direction == 'right'){
            setInOutDirection('right')
            setCheck(false)
            setTimeout(() => {
                changeSlide()
            }, 600);
        }else if (direction == 'left'){
            setInOutDirection('left')
            setCheck(false)
            setTimeout(() => {
                changeSlide()
            }, 600);
        }
    },[direction])

    const changeSlide = () => {
        if (direction == "right") {
            setInOutDirection('left')
            setLeftSlide(middleSlide)
            setMiddleSlide(rightSlide)
            if (index === contents.length-1){
                index = 0
                setRightSlide(contents[index+1])
            }else if (index === contents.length-2){
                index ++
                setRightSlide(contents[0])
            }else{
                index++
                setRightSlide(contents[index+1])
            }
            console.log(index)
            // setRightSlide(contents[index+1])

            // index++
            // console.log(index)
            // if(index == contents.length-1){
            //     setRightSlide(contents[0])
            //     index = -1
            // }else{
            //     setRightSlide(contents[index+1])
            // }
            
        }else if (direction == "left") {
            setInOutDirection('right')
            setRightSlide(middleSlide)
            setMiddleSlide(leftSlide)
            if (index === 0){
                index = contents.length-1
                setLeftSlide(contents[index-1])
            }else if (index === 1){
                index--
                setLeftSlide(contents[contents.length-1])
            }
            else {
                index--
                setLeftSlide(contents[index-1])
            }
            // index--
            // console.log(index)
            // if(index == -1){
            //     setLeftSlide(contents[contents.length-2])
            //     index = contents.length -1
            // }else if (index == 0){
            //     setLeftSlide(contents[contents.length-1])
            // }else{
            //     setLeftSlide(contents[index-1])
            // }

            // console.log(index)
            // if (index-1 == 1){
            //     setLeftSlide(contents[contents.length-1])
            //     setIndex(1)
            // }else{
            //     setLeftSlide(contents[index+1])
            //     if (index < 0){
            //         setIndex(2)
            //     }else{
            //         setIndex(index-1)
            //     }
            // }
        }
        setCheck(true)
        setDirection("")
    } 

    return (
        <div className={styles.carousel}>
            <div className={styles.slides}>
                <Box sx={{width:'100%', height: 500, overflow: 'hidden' }} ref={containerLeftRef}>
                    <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerLeftRef.current} timeout={500}>
                        <div className={styles["slide-left"]} onClick={()=> setDirection("left")} style={{backgroundColor:leftSlide.color}}>
                            {leftSlide.id}
                        </div>
                    </Slide>
                </Box>
                <Box sx={{width:'100%', height: 500, overflow: 'hidden' }} ref={containerMiddleRef}>
                    <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerMiddleRef.current} timeout={500}>
                        <div className={styles["slide-middle"]}  style={{backgroundColor:middleSlide.color}}>
                            {middleSlide.id}
                        </div>
                    </Slide>
                </Box>
                {/* <Box sx={{width:'100%', height: 500, overflow: 'hidden' }} ref={containerRef}>
                    <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerRef.current} timeout={400}>
                        <div className={styles["slide-right"]} onClick={()=> setDirection("right")} style={{backgroundColor:rightSlide.color}}>
                                {rightSlide.id}
                        </div>
                    </Slide>
                </Box> */}
                 <Box sx={{width:'100%', height: 500, overflow: 'hidden' }} ref={containerRightRef}>
                    <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerRightRef.current} timeout={500}>
                        <div className={styles["slide-left"]} onClick={()=> setDirection("right")} style={{backgroundColor:rightSlide.color}}>
                            {rightSlide.id}
                        </div>
                    </Slide>
                </Box>
            </div>
        </div>
    );
  }
  