import React, {useEffect, useRef, useState} from 'react';
import s from './CatCard.module.css'

const CatCard = ({taste, weight, disabled}) => {
    const tasteDescription = {
        ['с фуагра']: 'Печень утки разварная с артишоками.',
        ['с рыбой']: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        ['с курой']: 'Филе из цыплят с трюфелями в бульоне.',
    }
    const description = {
        ['0,5']: {
            portion: 10,
            mouses: 1,
            happiness: false,
        },
        ['2']: {
            portion: 40,
            mouses: 2,
            happiness: false,
        },
        ['5']: {
            portion: 100,
            mouses: 5,
            happiness: true,
        },
    }
    const getTruePhrase = (num) => {
        let word = ''
        if (num === 1) word = 'мышь'
        else if (num < 5) word = 'мыши'
        else word = 'мышей'
        return `${num} ${word} в подарок`
    }

    const [selected, setSelect] = useState(false)
    const [wasHover, setWasHover] = useState(false)

    const onHandleClick = () => {
        if (!disabled) setSelect(!selected)
    }
    const mouseOutEvent = (e) => {
        if (!disabled) setWasHover(true)
    }

    const border_style = disabled ? {borderColor: '#B3B3B3'} : (selected || wasHover) ? {borderColor: '#D91667'} : {}
    const bg_style = disabled ? {background: '#B3B3B3'} : (selected || wasHover) ? {background: '#D91667'} : {}



    return (
        <div className={s.cat_card_wrapper}>
            <div className={s.cat_card_container}
                 onClick={onHandleClick}
                 style={border_style}
            >
                <div className={s.cat_card_title}>
                    {(!selected && wasHover)
                        ? <p style={{color: '#D91667'}}>Котэ не одобряет?</p>
                        : <p>Сказочное заморское яство</p>
                    }
                </div>

                <div className={s.cat_card_body}>
                    <p className={s.label_name}>Нямушка</p>
                    <p className={s.taste_name}>{taste}</p>
                    <div className={s.bonuses}>
                        <p>{description[weight].portion} порций</p>
                        <p>{getTruePhrase(description[weight].mouses)}</p>
                        {description[weight].happiness && <p>заказчик доволен</p>}
                    </div>
                    <div className={s.weight} style={bg_style}>
                        <p>{weight}<br/><span>кг</span></p>
                    </div>
                </div>

                <div className={s.for_hover}
                     onMouseOut={mouseOutEvent}
                >
                    {disabled && <>
                        <div className={s.title_wrapper}></div>
                        <div className={s.body_wrapper}></div>
                    </>}
                </div>

            </div>

            {(selected || wasHover)
                ? <p className={s.bottom_text}>{tasteDescription[taste]}</p>
                : <p className={s.bottom_text}>чего сидишь? Порадуй котэ,
                    <span onClick={onHandleClick}> купи</span>
                    <strong>.</strong>
                </p>
            }

        </div>
    );
};

export default CatCard;