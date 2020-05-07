import styled from 'styled-components';

export const Styled = styled.div`
    & > .public-layout 
    { 
        background: ${props => props.theme.dark};
        height: 100vh;
        .Header {
            min-height: 80px;
            background: ${props => props.theme.black};
            position: sticky;
            top: 0;
            left: 0;
            z-index: 10;
            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-height: inherit;
                max-width: 1200px;
                margin: auto;
                .logo{
                    color: ${props => props.theme.orange};
                    font-size: ${props => props.theme.fontSizeLg};
                    text-decoration-line: unset;
                }
                .linkVote{
                    color: ${props => props.theme.white};
                }
            }
        }
        .content {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-top: 60px;
            min-height: inherit;
            max-width: 1200px;
            margin: auto;
            .container {
                width: 100%
            }
        }
    }
`;

// .Header {
//     min-height: 80px;
//     background: $dark;
//     position: sticky;
//     top: 0;
//     left: 0;
//     z-index: 999;
//     .container {
//       display: flex;
//       align-items: center;
//       min-height: inherit;
//     }
  
//     .flex {
//       &-left {
//         flex: 1;
//         .logo {
//           font-size: $font-size-xl;
//           color: $orange;
//         }
//       }
  
//       &-right {
//         margin-left: 2em;
//         .linkVote {
//           span {
//             font-weight: 200;
//           }
//         }
//       }
//     }
//   }