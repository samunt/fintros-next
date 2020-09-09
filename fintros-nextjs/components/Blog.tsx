import * as React from 'react';
import {FC, ReactElement, useContext, useEffect} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import ButtonContainer from './ButtonContainer'
import styles from './Blog.module.css';
import axios from 'axios';

type BlogProps = {
    title: string
}

const Blog: FC<BlogProps> = ({title}): ReactElement => {
    const {isDarkMode} = useContext(ThemeContext);
    return (
        <div className={styles.displayType}>
            <ButtonContainer/>
        </div>
    )
};

export default Blog
