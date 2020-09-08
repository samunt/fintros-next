import React, {FC, ReactElement, useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {Button} from './Button';
// import styles from './Blog.module.css';
import '../styles/Blog.css';

type BlogProps = {
    title: string
}

const Blog: FC<BlogProps> = ({title}): ReactElement => {
    const {isDarkMode} = useContext(ThemeContext);
    return (
        <div >
            <Button
                buttonColor={isDarkMode ? true : false}
            >Even</Button>
            <Button
                buttonColor={isDarkMode ? false : true}
            >Odd</Button>
        </div>
    )
};

export default Blog
