import React, { useEffect, useState } from 'react';
import { SidebarProps } from '../../typings/layout';
import styles from './Categorymodal.module.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: '강아지',
    link: '/dog',
    subCategories: [
      '카테고리7',
      '카테고리8',
      '카테고리9',
      '카테고리22',
      '카테고리23',
      '카테고리24',
      '카테고리25',
      '카테고리26',
    ],
  },
  {
    name: '고양이',
    link: '/cat',
    subCategories: [
      '카테고리10',
      '카테고리11',
      '카테고리12',
      '카테고리27',
      '카테고리28',
      '카테고리29',
    ],
  },
  {
    name: '설치류',
    link: '/rat',
    subCategories: [
      '카테고리13',
      '카테고리14',
      '카테고리15',
      '카테고리32',
      '카테고리33',
      '카테고리34',
      '카테고리35',
      '카테고리36',
      '카테고리34',
    ],
  },
  {
    name: '조류',
    link: '/bird',
    subCategories: ['카테고리16', '카테고리17'],
  },
  {
    name: '파충류',
    link: '/reptiles',
    subCategories: ['카테고리19', '카테고리20', '카테고리21', '카테고리42'],
  },
];

const Categorymodal = ({ isOpen, setOpen, setClose }: SidebarProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // 스크롤 Y 값을 업데이트
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 마우스가 모달 영역을 벗어날 때 모달 열림 상태를 false로 설정
  const handleMouseLeave = () => {
    setClose();
  };

  return (
    <div
      className={isOpen ? styles.modal__open : styles.modal__close}
      onMouseLeave={handleMouseLeave} // 모달 영역을 벗어날 때 호출
    >
      <div
        className={scrollY >= 200 ? styles.modal__fixed : styles.modal__content}
      >
        {isOpen && (
          <div className={styles.categories__container}>
            {categories.map((category, index) => (
              <div key={index} className={styles.category}>
                <div className={styles.category__content}>
                  <Link to={category.link} className={styles.category__link}>
                    <span className={styles.category__title}>
                      {category.name}
                    </span>
                  </Link>

                  <div className={styles.ul__wrap}>
                    <div className={styles.ul__line__bg}></div>
                    <div className={styles.ul__line}></div>
                    <ul>
                      {category.subCategories.map((subCategory, subIndex) => (
                        <li key={subIndex}>{subCategory}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categorymodal;
