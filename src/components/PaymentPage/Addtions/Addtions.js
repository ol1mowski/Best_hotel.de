import style from './Addtions.module.scss';
import bin from '../../../assets/icons/bin.png';
import { useEffect, useRef, useState } from 'react';
import airport from '../../../assets/pictures/airport.jpg';
import food from '../../../assets/pictures/food.jpg';

const Addtions = (props) => {

    const airportTrans = useRef(null);
    const list = useRef(null);
    const time = useRef(null);
    const time2 = useRef(null);
    const breakfast = useRef(null);
    const breakfastD = useRef(null);
    const all = useRef(null);
    const foodButton = useRef(null);
    const oneWayTo = useRef(null);
    const wayFrom = useRef(null);
    const hideWayToButton = useRef(null);
    const hideWayFromButton = useRef(null);

    const hotelBasicPrice = props.price;
    const [breakfastAdded, setBreakfastAdded] = useState(false);
    const [breakfastDinnerAdded, setBreakfastDinnerAdded] = useState(false);
    const [allInclusiveAdded, setAllInclusiveAdded] = useState(false);
    let priceA = 20;
    const [finalPrice, setFinalPrice] = useState(200);

    const price = {
        b: 100,
        bd: 150,
        a: 300,
    };

    useEffect(() => {

        const foodCheck = () => {
            if (breakfast.current.checked && !breakfastAdded) {
                setBreakfastAdded(true);
                const li = document.createElement('li');
                li.textContent = `Breakfast: $ ${price.b}`;
                li.id = 'breakfast';
                const binImg = document.createElement('img');
                binImg.src = bin;
                binImg.className = style.container__finalyPrice__ul__remove;
                binImg.alt = 'remove position';
                binImg.addEventListener('click', () => removeItem(li));
                li.appendChild(binImg);
                list.current.appendChild(li);
                localStorage.setItem('Breakfast', 'set');
            } else if (breakfastD.current.checked && !breakfastDinnerAdded) {
                // alert('Breakfast Dinner')
                setBreakfastDinnerAdded(true);
                const li = document.createElement('li');
                li.textContent = `Breakfast & Dinner: $ ${price.bd}`;
                li.id = 'breakfast&Dinner';
                const binImg = document.createElement('img');
                binImg.src = bin;
                binImg.className = style.container__finalyPrice__ul__remove;
                binImg.alt = 'remove position';
                binImg.addEventListener('click', () => removeItem(li));
                li.appendChild(binImg);
                list.current.appendChild(li);
                localStorage.setItem('Breakfast&Dinner', 'set');
            } else if (all.current.checked && !allInclusiveAdded) {
                // alert('All')
                setAllInclusiveAdded(true);
                const li = document.createElement('li');
                li.textContent = `All inclusive: $ ${price.bd}`;
                li.id = 'allInclusive';
                const binImg = document.createElement('img');
                binImg.src = bin;
                binImg.className = style.container__finalyPrice__ul__remove;
                binImg.alt = 'remove position';
                binImg.addEventListener('click', () => removeItem(li));
                li.appendChild(binImg);
                list.current.appendChild(li);
                localStorage.setItem('allInclusive', 'set');
            }
        }

        foodButton.current.addEventListener('click', foodCheck);

        const hideOneWayFrom = () => {
            oneWayTo.current.style.display = 'none';
            oneWayTo.current.ref = null;
            wayFrom.current.style.marginBottom = '2vh';
        }
        const hideOneWayTo = () => {
            wayFrom.current.style.display = 'none';
            wayFrom.current.ref = null;
            oneWayTo.current.style.marginBottom = '2vh';
        }

        hideWayToButton.current.addEventListener('click', hideOneWayFrom);
        hideWayFromButton.current.addEventListener('click', hideOneWayTo);

        const createElement = () => {


            const li = document.createElement('li');
            if (time.current.value !== '' && time2.current.value !== '') {
                priceA = 40;
            }
            li.textContent = `Airport Transport: $ ${priceA}`;
            li.id = 'airport';
            const binImg = document.createElement('img');
            binImg.src = bin;
            binImg.className = style.container__finalyPrice__ul__remove;
            binImg.alt = 'remove position';
            binImg.addEventListener('click', () => removeItem(li));
            li.appendChild(binImg);
            list.current.appendChild(li);
            if (time.current.value !== '' && time2.current.value !== '') {
                setFinalPrice(finalPrice + 40);
            } else {
                setFinalPrice(finalPrice + 20);
            }
            localStorage.setItem('Airport Transport', 'set');
        }


        const addAir = () => {
            if (!document.querySelector('#airport')) {
                if (time.current.value === '' && time.current.ref != null || time2.current.value === '' && time2.current.ref != null) {
                    alert('Please select')
                } else {
                    createElement();
                }
            }
        };

        const removeItem = (element) => {
            element.parentNode.removeChild(element);
            if (time.current.value !== '' && time2.current.value !== '') {
                setFinalPrice(prevPrice => prevPrice - 40);
            } else {
                setFinalPrice(prevPrice => prevPrice - 20);
            }
            localStorage.removeItem('Airport Transport')
        };

        airportTrans.current.addEventListener('click', addAir);

        return () => {
            if (airportTrans.current) {
              airportTrans.current.removeEventListener('click', addAir);
            }
          };
        
    }, [finalPrice]);

    useEffect(() => {
        const airportAddedItems = localStorage.getItem('airportAddedItems');
        if (airportAddedItems) {
            const items = JSON.parse(airportAddedItems);
            items.forEach((itemId) => {
                const li = document.getElementById(itemId);
                if (li) {
                    list.current.appendChild(li);
                }
            });
        }
    }, []);


    return (
        <div className={style.container}>
            <div className={style.container__optionalAddition}>
                <div className={style.container__optionalAddition__header}>
                    <img className={style.container__optionalAddition__img} src={airport} alt='airport' />
                    <span className={style.container__optionalAddition__content}>
                        Transfer from Airport
                    </span>
                </div>
                <button ref={hideWayToButton} className={style.container__optionalAddition__oneWay}>One way From</button>
                <button ref={hideWayFromButton} className={style.container__optionalAddition__oneWay}>One way To</button>
                <div className={style.container__optionalAddition__box}>
                    <form>
                        <div ref={wayFrom} className={style.container__optionalAddition__time}>
                            <label htmlFor='time'>(From) Pick up time: </label>
                            <input ref={time} type='time' id='time' className={style.customInput} />
                        </div>
                        <div ref={oneWayTo} className={style.container__optionalAddition__time}>
                            <label htmlFor='time'>(To) Pick up time: </label>
                            <input ref={time2} type='time' id='time' className={style.customInput} />
                        </div>
                    </form>
                    <button ref={airportTrans} className={style.container__optionalAddition__box__button}>
                        Add
                    </button>
                </div>
            </div>
            <div className={style.container__optionalAddition}>
                <div className={style.container__optionalAddition__header}>
                    <img className={style.container__optionalAddition__img} src={food} alt='airport' />
                    <span className={style.container__optionalAddition__content}>
                        Food type
                    </span>
                </div>

                <div className={style.container__optionalAddition__second}>
                    <form className={style.container__optionalAddition__second__form}>
                        <div className={style.container__optionalAddition__breakfast}>
                            <div className={style.container__optionalAddition__breakfast__inp}>
                                <label htmlFor='breakfast'>Breakfast </label>
                                <input ref={breakfast} type='radio' name='food' id='breakfast' className={style.customInput} />
                            </div>
                            <div className={style.container__optionalAddition__breakfast__inp}>
                                <label htmlFor='breakfastD'>Breakfast and Dinner </label>
                                <input ref={breakfastD} type='radio' name='food' id='breakfastD' className={style.customInput} />
                            </div>
                            <div className={style.container__optionalAddition__breakfast__inp}>
                                <label htmlFor='breakfastAll'>All inclusive </label>
                                <input ref={all} type='radio' id='breakfast' name='food' className={style.customInput} />
                            </div>

                        </div>
                    </form>
                    <button ref={foodButton} className={style.container__optionalAddition__box__button__breakfast}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Addtions;
