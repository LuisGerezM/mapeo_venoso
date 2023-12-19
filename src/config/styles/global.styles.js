import { createGlobalStyle, css } from 'styled-components';

const minHeight = '100vh - 112px';

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;

        *, *::before, *:after {
            box-sizing: inherit;
        }

        a{
            text-decoration: none;
            color: ${({ theme }) => theme.blue}
        }
        
        ul, li, h1, h2, h3,p,button {
            margin: 0; padding: 0;
        }
        ul { list-style: none}
        button{background: transparent; border: 0; outline: 0;}

        body{
            background: ${({ theme }) => theme.colorsByTheme.background};
            min-height: '100vh';
            max-width: 90%;
            overscroll-behavior: none;
            width: 100%;
            margin: 0 auto;
            transition: 0.5s;
        }

        #app {
            box-shadow: 0 0 10px rgba(0,0,0, 0.5);
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
        }
    }
`;