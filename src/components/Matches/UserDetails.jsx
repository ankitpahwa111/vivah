import React from 'react'
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
// import {Redirect} from 'react-router-dom'
// import moment from 'moment'
import Footer from '../Layout/Footer'
const UserDetails = (props) => {


    //const project = props.projects.find((project)=>project.id===id)


    return (
        // <div class="row">
        //     <div class="col s12 m6">
        //         <div class="card blue-grey darken-1">
        //             <div class="card-content white-text">
        //                 {/* <img src="./Vivah.jpg" alt="ProfileImage" class='profile-image' /> */}

        //                 <span class="card-title profile-name">Ankit Pahwa</span>
        //                 <br />
        //                 <span>21</span>
        //                 <br />
        //                 <span>Delhi</span>
        //                 <br />
        //                 <span>Hindu</span>
        //                 <br />
        //                 <span>Engineer By profession</span>
        //                 <br/>
        //                 <span>Astro Sign is Gemini</span>
        //                 <br/>
        //                 <span>contact at ankitpahwa111@gmail.com</span>
        //             </div>
        //             <div class="card-action">
        //                 <Link to='/'>Add To Favourites {' '} {' '}
        //                     <i class="material-icons">sentiment_satisfied</i>
        //                 </Link>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <React.Fragment>
        <div class="row user-details">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXFxYYFhcVFxUWFxgVFxUXFhcVFRcYHSggGBolHRgXIjEhJSkrMC4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLSstLS8tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAD8QAAEDAgQDBQYFAQcEAwAAAAEAAhEDIQQSMUEiUWEFE3GBkQYyQqGx8BRSwdHhYiMzQ1OS0vFygpOyFRYk/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACMRAAICAgIDAQEBAQEAAAAAAAABAhEDEiExBBNBURRhQiL/2gAMAwEAAhEDEQA/APHNar5VYNVoX0qR8m5Asq7KiwuypqNsCLV0IuVRlWo2wMtUZUWF2VajbAsq4BFyrsq1B2A5V2VGyrsq1G2A5VIYi5VYMWoGwDIrCmmWUUdlFK3Q8U2Iiip7laYw6g0EuxVYzLfTQ8i0alFAdRRROSaFMq7KmDTUGmmoW2AyqMqY7td3aFGsBlXZUfIu7tajWwOVTlRhTVhTWDyAyqciYFNTkQNQtlUhiYFNW7tazai2RdkTORdkWNqDhdCLkUFqc57BwphXhTlRNYKF0IhCiFjWUhdCJlUhiJrBZVOVFDFYU1g8gcq7KmhTXZFrDqxcU0RtJGaxEYxI2VjArTpJyjh1FJi18Bh5UZyo6scRenguipVwcbL2nZ3YxcLBL9p9lFmoXMsyujqeJ1Z4WtQSlSmt3G0YWXVYumMjmnEQNNQWJosVSxUsg4i2RSGI+RTkWs1C+RdkTGRdkWs1C4YpyI+RdlQsNAQxTlRcq6ELDQMNXZUSF0LWageVdkRIXQhZqPPYP2gIEVAHdRY+mhWzhcVTqe44TyNj6b+S8FdXa8rih5Ml2dmTxIS6PoDqSq5i8the36rBBOYbZ7/PVaFP2laQM1MzvBEeQK6Y+TBnJLxJro18q7IgYTtKlU0dB5OsfLmnsispp9EXia7QIMV2sRGsRmUkdjKAAU1YU022giNw5W2DoJd2p7tPCgqPDW+84DxIH1W2G0FAxXaxMtYDoQfC/wBFxpoNjJUVprb7LeJCxgE3hq0KE+Toxs+n9i1m5IlJe0dZpXmML2oQNUPHdol264VhanZ2vNcNTN7QddZNRNYmpJSjl3w4RxTBkKpCuVQlUslRWF0LiVGZazUWhdCp3i7OhZqLQuK4Jd+NYM4m7AS4eUxPNBySCot9B1Cya/b1NueY4TAG5IIDvKPos2t7VflZ8UzOrQdI2JUnngvpVePN/D1C5eY/+1ABsskmC7aASSQ3nAgApdntU8Fxyggk5QYgD4dBJPmlfkwGXjTPWOqAODTqQSPAan5hXK8C7t+sXtqFwzNBAsLgkmDzHTolsV2pUe4vc655W2hT/riP/HL9KtcitOyWZVCkVRzXFsjrcWHJhWCAK4O64VwmUkDRjTWHZOUO0azLNe4Dkbj0KzW1xzRm1RzVIzrpk5Qf1G7R9pKoEENPWL+miu7tqo7/ABI6Dh+iwG4psXKK2sw7gK0cz/SMsC/DYfjap1qP/wBTv3QzXd+Z3qVnNxjRPFp+ybo4phiYvy++qosqZN4ZIL3rtA4xykqA0lHoOpuJAIkGLppuHEx4fOf2KOwVChOnTI0t4WWtge2KrLO/tB/Ubjwd+6SxFanTEuPO28iP3SR7cZIhhI3m3L+UPYkP6rR7Gl2rRcJLsh3Dh+osmhpIMg6EXC8C7ty9mNjrJ5cvP1U0e3Kg90hk/lkevNb3IX1Ue+FQqHVV45ntDWkcU9IF5jePuUen7TOg5mNNjBki+09NdEPZEb1yPRvKE4rzz/ak3im2NpJ+azsV7Q1XfEGjk0AbyJR9qQnrbPWuchly8TX7YrH/ABHJOpjHHVxPiSlfkDrA2e6r4xjc0uHDqJE+Ec0ge2WB75qNLALc/hFvPMfALxzq0oZqKT8hlI+Oj0uJ9pdQxt9ifPb0SdT2jqkyMoF4AHQj9fksMvUZlOWaT+lVgivho1e2KxJmo64gxa0zbklHYhxmSTOtzfxS5colTcm+yqgkFc5VLghyqyksdRC5lGZDlchYaCtcFBehErkDUcVwRC4clAqdEAlFwRhX6D0Ck4o+HoibkCCiF6scU42npoP0C7vCiBlJUhW7881IxB5ooBUK7G3XfiHcz6lWbinD4neRKNiuy4rFukjT5GymtjnuMlx23O2iqXucdSTc36XKvWwdRsEtMESIEpuQcfQDqpJkkk9ZKsHLnsc0w4EeIIUsePzgeIf+jVroNfhZrlfOqh7f8wej/wDaiMrMkS628B0x04Ud0Lo/wt3qg1Vsdm0sPWqNp021sx5vaBYEkkmiYTeP7Ip0ml7m1CBE5arTA0mBR0W9qG9UjzGdVL05X7gnhfUaP6ml59Q1v0Qiyj/mu/8AE7/d9ws5oHrYqXKpKaDaX+a7/wATv9yWqkTYyPAj6pdg60DlRKkuUShYxCiVMqCgY5QuldKFhIK6FxKiUAnQuUteVVAJyiFy5YIY01PdKcykFFIm2yO6UmiFcFcSmpC2yjaARWUQoDlenmJgAk8gmSQrbJ7gKwoNWthvZ2s67srP+o39AtWh7LsgTVM7y2RPS+ivHBJ/Dnlnivp5kYRpAgc/T7+iZo4Fo1C9A7sEgSKjY6yLKv8A8DU2cz1I/RWjhS7RGWdvpmfRZTBByiQI8loMxeiufZ+rzZ4z/Ch3s9VGjmep9NFTSvgiyf6TUex9ntDtNekx9T6pF/Y9ExGYX2O3K/l6JkdlVhrlHUuCf7O7HL3QSXn8tMH5u2CR475aLLLXFmIewmOPA53URm53t5Jqn7JkNzuqCmwb1GwY8BeV6jGYmjg2/wBq5rTc9zS4qhi/FyHUrJxuIc80a7pE1qZbSaTla1wMSfidOXiNhFouTCevOp0wUuNi/s1g6VIOqZhUnhGYFhEEh3Dfcbo2PqUySLEEEamIPRK9mFzmAjKRmqHQ3/tHFGrB5Mx6NcuFu3Z6EVSoXwns5hajTle7O2MzJu0QDIkQ4fuEhiPZEWy1bWnM241vbXZHwzv/ANQGYtIJcIkEHugJjcdDyXoezXMxrS6mRTrCQ5jgQ1xa4tLmn8sjW8aFdWOUa/8ARxZYP/ns8TX9lag917TqdxpJ/b1Sz/ZnEflBuRYjab/fNevxJfSfkqNLXDnuOYOhHUKWYpdf88HyjifkTjwzwFXsuq2JpuEzFtYifqPVK1KDgASCJ0kETeLL6XVeHNLTuCOtxCA/DMLQxwzD+q53/dTfi/jGXl/qPm8KpXu63YOHdJyxMe6YjXT72SVb2XpkDK9wNpmDPMxspPxplV5UPp5BQvQ1vZh2cNa6WkE5iLNuYB66LKqdnVBNpyhpP/dEf+wUZYpx7ReOWEumJLldzCNQpdRcNWnSdNufgkKWCXKxaVEpQkFdClcsEICrBWZTmwBK0MP2W868I66+irCEpdHPPJGPbM9rCtHB9kvdc8I5nXyC1MNg2s0EnmdUxmXZj8ZdyOHL5jfEANHsmi3UF3if2TuHDKfuNa3wF/VBYJMc1ZjNZsRNj02XRePH8OVvJPtjRxJXHFnmkbnQTGp+WnOeUqteoABJIvaNdCbeEfNK/JWra+BjgdpM0DjbgbC5/QIwxpWWxhF456kaiANEVPiyqfIuTG48GkMeVAxskA1KdOd6jgxvqdSkAUHtDCCrTLJAJiDExBlUm3q9exMeu636PTGpgqTe8q4ltaPhY7fllbfzJAWefap9cOZhcuHoiA4gS90zpsJ+XVefqdl0qVGpAzOyO4nbHKfdGg+qj2RqNFOpmtdpnbcX9V57jL2RWV9nrRyQ9UpYV0aOMpNZh62UGSx2ZxMudwnV36aIXauKc2jQaGF4DqReBOwBayRMF0jbcc0922MuGfaXPpuLW6RTi9V/JsSGj4j0F7Yp+TBsNNoJb3DwOZFSm4ymy021HpI2G0k59tm77J9h4yvQFRuHaGuLyBUxDmG73H3RRdETGuybxvsxjmX7mkBa7cU8aeFEJ3BYt7KTRLg5rRJDyLwJMeqlvbNRxgVXgcs5cYH/AGrzbPUSPnnaoxFHGNa6i4OaS45XGqCzIwO4g0aQJtuEfsJzu671hILX1nMcNRxu+R3G63e13u/F03uu3uqgB1Ml1IwT5FYHYeJy0qrHHhca7qcbFrnAs/VdeCqt/bOPPbdL5Rou9tMLXot/ECCZs2mXZSNYhwLSZ10MGx2RwlWnUk0XOcwbuaWmeXXxHNY3spTpvpVmVGggmn4ggPu07G62Oz6baDO7aSRJMnW6v4kZ8P4cnnTx8r/ocDCpyoDsWqOxa76PN2HMi4tSRxR0UfiihwbY0ICqWjokRi9Z8uvRc/EnTklUk+B3aQ07DMMS0WkaDQ6wpdRaRBAIiIgacvBJfiVwxKOqF9jDV+z6ZZlDGCJy2EAwQD80sewaPdinERBLhqTF7nZE/ELvxKR44v4Os8l9E2+y9HiuTPuz8Njy1/hVpeydKOKo4neAAnvxKn8Sp/z4/wAH/qyfpl0srRDQB4K5qpHvV3eoKdBeNvsd75R3qS71calpWeWuWFYbHhU6SqMe4cHXQ30sqChLTxjUDhzG5gwbdPVCc1wAIiZG8bwLrjl5UJS5ZeOBpcDbK5DSfhA1tDYAOsdOpHigVMXILjltEDWW5hAAI158gDrYJV9YtDrZoiIuBzc6dCL32KFhHjOc5iGECL+9aw6SuCfN10dkY/pqYWsM5GbaQCCOZIkH5HomwWmWszSOZiZPugZbHQ+Xksui9pzOAILmyd+KOZjXl4XTLQWNZpmBkyfi1zTPgYT4srVRuieTGnzQQujmubWUuiBAMho94AEibZddz49Us4knQ35xr5L0sPl7OmcmTxqLdsV3GmQ2AMvESdYJMNnc2HkszssjuXTB4m8J+KbEEggtF9eouITntLQytYZgEGxMkkaEDlJhI9hUw4kZcx5GbSQJMclwZJ227s9HFBQglRtVKo/CvI1cx0m5kht4J1AMhHp1sxw9AG57tzzc2OUtZYj4QSf+ockoA2AC6MwIvyF3kRrAna8QtT2UoTUdXjK1vCwSIbYAkW1DbSOZT+56dhx4rlbX09h3TyPijmA79ZVWYYi4zaXJn/bpdXJMe87/AFMCrVEWJ1/qp6rms7qAdp4XMzigOjhcZsbOgkwADEea8LQH9gQ4fFVPgczp+q984zrl137sjf8AqXjO3aJpvdERxO4cpaAQ6wgm9nfJWx5XFUc2fGm0zI9mHgU33uXNt5LSqVY/Ref9nqgz5XaHx1i2nhHmteo3YEk8gNui7cGdRhR5nlYdsmwZzzMbqO805pc1DLRBgC4naY8tlonCHVoIyx728TESNN/LVbJ5eqV9sSHj2LMJJgCT0+cImKJBy20EkaeP3zUhxFWzDYCZ90AgOkkN66Rv6WxrxDyQAAZcA+8EiCW3sP1C5MvmuOSL+UOsCqgPejY35wNTy5eKrWrcRjSbLq+DGWxcSDcgOIy2Im3j6aoTMOdyQJJPDcNnhMbb+oVoeXDa7Flh4L98u75Jh3X9Pmo7xdnsJeod71T3qXwwDjBOURrEx43Co50fcIe5XQPUOd6u71Jd4risOXzReQ3qBtpze9+UG+pAHmhvab2gA7/Tr4otIXtmBEQ0AST05COfNXr0ajhEAc5AtOxdqvJhnkpcs73BCJeuNxe8X/lWrUcomZHOY+RCVNRdfsUlwBQLmo5oMTBsRtE28PHqimuAY4HWIkBwBHOxHEI1II8UFzhlNzPLaZS1HM3iaY1059PVcc1G+Doj0aFUghxzQZNyAJNyTb6IEZRYgz8UQba3JNlRjyY0J6WPOdOio0yQPkbDle/jdCuKNqamHeIkTIu4kg25QIvyvsjvxBMNmxuCWgDU2jrbc6oNPF92Pc3GhInctNyD8tdUGs47w0iYF7Otpv8AcqP01GnSeXgh7JIDi2JsJkw3w015BAqF1JuYFrnEDKyScwicx6LsNSyvu4xw+628gXg6XuPNVxFcmS8ZiCZgAAaACdN5jaw6KkJuKaX0ygm7Mztiq9xzVHS/SNmtABgDYbQq9l1Q0OncRYxcGUtWuXFEwm3U3/fyTPlclRoYkugAEmRlidSRH34L6F2O4UqbKdyYmA2oLmCTYXvK8n2RQAqCS0Zd5Av0kibH6WC9dha7bOmmHEGMznSAYkaSNBbop7LpFsaGa+LfsXxYf4oPPki/i7Xc+Tparr6hVGLH56X+px/VLYh4cC0PpT0Dz9SgVLvrwMxcfGKngDc7rzPb8nOZkZXDSJhrokSb3N+q2oANnU3b/EdBte3hosLHUh3BFycpJnhdMZRmad9BqlcqonNcHlcFIBcNb21uBZb1KpDQXSHwJiGgEgb6gxK8/hqhbfr9/fVbdCoHgah2+Y7aCPp1noruVd9HJNWdTgOzTa5vc2sZ02+q0a9cwbkHKQDJGxJlp1tHr1SeGbxFzRpzGjrm4NhpF9/mbENgd5OaSJIMNmx0PFpItZRyz3aFiqO7wuOaczr6A2kmJ3Oh5q2Ia1zXOsC+5uQQbGJPw2K7DEXEhpBDtJNrOPTnpoDzQqz7w4CwMRHFBABmbkybdFGUm+PwDRfsmscrpcSYscxgEg3ib8IMWtN7oZqSDmBIAIaQdYkiMw5EzHLqs+mx7ajpm4MwSIzAzH5gNDpr5In4wuaNxIhsSCbi8aGMvP5WOnNoDiadDCWzFlvhIiL6wNXWi5FkmKYzkN90mRYgDm2+1tkLC9ohpEiQ2bAAawIkQLCbwpZVBqSOZBu0FwgyTFiYiyeEsik7YHEew+EdDsoB90AunYG+UdDrO5Wa992j+mCZLZueZMbDl0Wq1uSnUcTEgQf6gL2BgCx8Z20WN2bWDuFx97MLGIkE6aQmw5ZOTb5FUbTHGMMSGt90kzfSxgA9QoJBu00gNg4mfNHwYBEyIzN4gTdsnPOxNhaJ8lmlpFpNuQEeVl0xyW3bF1H2cItOtstiSLiS77sln1i4kEuMWjMLwJOvPpCSfXkWdJvc9Z6a3QHBzTeTN+RK54xZfWxvEQTeRudPlv5ITa7bxBEabiCCCTEE208Ui+oTruq5tlZXVB0C1HT98+aihBkmbX8UGURsWsPmix64C57aQdjopo07kgiBHX5DzQw6IB5fU7c1NIGJBj1B+WiATQ7sRmzyb3InTSBuban/AJew2BzDM8lw4ut4208Vj95LwBMW16rYwFMGAXERHwmQJDTMbSQAZ32UZWhRqjVDYAEmOEnXNO/KxI21WZ2vXf7rhBG0kwQBre5sDPRMViA4l2sRrMHrAHzjdYeJrkkyTAmP3WgrY1UAei4WqGniEj0QgJT3Z+CDiOKNfhDtOYzBWa4CuTf7N7SANiBIBMNmIHMC+g21M7LbPa4Df7waWBYdxfViw6TQ0yKgkEn+5GTXRwDiTe4noiZaskCpTdGoylt9LgU49VDVLo6I2karO3KlmtJ0izQYFtIZfRBoY+uC5xr5h+U0pO3xFsA+XVVoiq+cvduFgTmaMvOwIAgGwKp2gXAAENB8JAuTdwIOy1jDNQvfTdDod+YUxdxF4ytJA8T/ADi1MK8MLKzi4jSz2ki8XIvp9U9+KqZR3cNIg2N+moMj7gqmIx+Ie0MJqOJOjmsDdNnCOR+G0jXUZLmxZUzxpJAIPP8A5++i0sJWJYWi5t5C8mdt1TtB3F8RMXLiJJm5iBFtvPdAFSBaZ26DXz5KzWyOZm52fjCDD2wzo2RsCS7ncnfQKuKIBJvaBE3iDA0Mxb+EHC497WifddawNgBG8wbmyIKzcxzNETAiBuYm8/l0N5hczi9uhXHkrh62U5pkEEGRJ0uANBte9kuah/qMkTJPEdJ06EevkOrjGB2UzAJ922kxeP0QcTiCCC1wMaASY38FXRsNGj2gJbmJByu2Ia67b2uNGj5arOFfgcG2BcNS2YEbQDrfyKIHuIL/AHiBNjMAWlwGjdEkal7xqLEW3iR5owhSpgSGO84Sc0uOoiZGkg+SaoV8pDoa6BYRDYMtNufkVnM4b7jTe/0TzK+YtbAAjUGNokn9FpIFF6mYgkRzyiII3JA8/Q3VsJSDnwHQ43BcLZhMaG26LSAa2XCblvOdSYIgA6mCDN+Sq2nlkFpkXkaA6CD+iXrgFBqL2tIaRsZgjXQCD4XlPtpVSJFMRtxNFtjEFZtWiws7yeNxHX80m+hkH0mAmKPabwAOJ3UueD4RfTTXZTlFS7EcTPxeHDaYMwPAST47bjohUg6LnXQGbgTJk6AJvEY2mWxllwiDEASIvBjy5yj06zA1vCN5JAF40E7X8OYTKTS6GTZivoSJbreYBjoBZL5W8/ktOq6m6JIaANGD+BO9ys+pUaJAG9jOg2hXi7KJgiolTUdJkKKbgNRPyPkU4QlE8/nFvXyRKlWDoPvdAFTkB+qrc9UKCHa+b/fmnDi3iDtBAkTadJ2v9EKjhYaXHUeBFvNDLS7hEkC55fL7ug0magmIxxPpB67SlIXGnBhEDR/xp5oqKXQpzWeq3aFAtYMhhxMknKI5CZv8tFn4fCEtJg3jLAubx5D+Vs4Gj+fKI5h0X6jXleDySTkWxxDYTDA++dPiJmYN9AI338kR9YU3OzFgDdABsIuc1zPTSDdArUXudwOyiCRkBIImbm5i8eYV6eElsOyzuXQDykgi2sfqpFqH6eKLh/ZgEa3BI00gfv5Jau8CM7Q4mwIcBe/rc6fwoLXDhpsDmnZhAjq6RM7/AGE1TcBHFxwbF1xGsgQZ8ddt0LNQuWuGgyi8AkkwYmb8xb+VR2JcNYImzpiOhi1rc7Jis8iZGukXkDaCP1OqC5xgAs4TFwLBxB8DsfXosnZmhXtDABzCzNmqA5uLK0zZsFo0tI89F5si0b/ovQhuYktJsCJYZgciSIB4djzCxu1aBa8wZBkyYuRE6E81aD+EMi+iwqkNLdtfPp97IFWrJVnac0EhPRM0XMpuhwBgf3kTYQL+u/ilauGcHADin3SNwh0qhaZ+tx5jdaVBlKoPeyED3ZIG8kSTGywRNtJzdYBOgO43g6fNFpUMwJBhwjMDex0IO6NQ7sX4qg0yFtpNgc22qvUAg58wEZZsXN3DXwLi9isYzxTMkRp9Of09UeiziGXwnrGh6KcTXp5WtaSXN4ZIiW36/VUouINhJIIj9bb680GBo1cM4xBmXQCANRyJn3rGDyG03fdTcKOcUyRrmdG+UQZMnSJ1v0SlBzCyzZNi3LLoEAHM2ZN506hExGMeA2SS2LS1vDuAZEyJ08FzuxGmDqVGuZ7liM1p0DiDOmkjTYJWkJHPz/ldXcLHLEADhEX8Odgf2Va2QOIIBPMDndFcBOrsdAgQBckwNBEwbBCq03ZMs7kiQRsAdegBKrXdAM3i2wF52S1bFGA3QeJ3VYx4GorXZBy2JHIz5zCA4qJXNVAkhXZSnw5+Gql7Ijy+aYqs4eUDbQz0WMLPpxuLfduicw2GOohx2mYnyF/4Q8NTFyRMFo/1GFsMeXUyRDQJAA5C1yfGUGZCdVrwGsLS030Ek3m4XVmtpMLZzPdO0AC++506LUDRkNUe8GuIm+hAM6Akg+Swa7y9xeTJN/4sguQvhFA3mj4HDOqOyhsjUwNhzJQOi2cHiu4pB7ROfNN4IyxAnldGTpcAgrY23s1/uucJgQJIbEmzSLzba11pU8OabS15aTAhp0uRB0kC/VI0sS/3+G4sMswbmRfqfVaNJ3eUmzqQ7wtBI5781zSb+nUkvgrRBzS0gTqXDXyGm2ypiMKxxcXC8wDeSdgZ1K2HUWtw1IxfO9pIgTuJtfRZ9OuG1MuW2YjU8w39Z8gtZqJwjmtysJHKLkm2xO9zry6q2KY5ozATyIbFxsL66pmqC8GCBAIu0O318Vn0GZmh0ub72aD72UxckeHodZKH+hIxGNeIziJAOUAOdfSDpuhiu8nhyQ6xa4PLoGrm2AO18wkiE6MO3LmIBPvEwMxO8nn1SuOApvDAJBLJkmLjSJ04fuEU10BplzQLW3BBGzmgag5pM2ItGv6rP7Uw4qMcWkEtkgcI0jMBBuL8tQU3i6gpte45nZQ8AZiIdoHDw5GUKm6Wlxn3X2BMcIkRMxrt1TIV/h5dsfNDcJum8TSDXkCbb85A/dDFLrb7/ZdJy9CjmqAVdVlYJNKplM/uL7GyJiK82tzJAMk9ZKCVBQoJLBJARqVTK688rGCLpdGF/RYw/h6rXBwMC0ibyZg3BB3mOhTTMRScwgOc0yAQYym9tbyPosNONx5ADSA4ciBqbEjkUriYrVe+8ybjiExOwnwKYp4t4AFj5t/W6OKQcwVCNdr+Fzus3L4+qHDAf//Z" alt="ProfileImage" />
                        <span class="card-title">Ankit Pahwa</span>
                        {/* <a class="btn-floating halfway-fab waves-effect waves-light red "><i class="material-icons">add</i></a> */}
                    </div>
                    <div class="card-content">
                        
                        <span>21</span>
                        <br />
                        <span>Delhi</span>
                        <br />
                        <span>Hindu</span>
                        <br />
                        <span>Engineer By profession</span>
                        <br />
                        <span>Astro Sign is Gemini</span>
                        <br />
                        <span>contact at ankitpahwa111@gmail.com</span>
                        <br/>
                        <br/>
                        <a class="waves-effect waves-light btn"><i class="material-icons left">add_a_photo</i>View Pictures</a>
                        <a class="btn-floating halfway-fab waves-effect waves-light red right"><i class="material-icons">add</i></a>
                    </div>
                </div>
                {/* add Photos of the user */}
            </div>
        </div>
        <br/><br/>
        <Footer/>
        </React.Fragment>
    )


}
// const mapStateToProps = (state, ownProps) => {
//     console.log(state);
//     const id = ownProps.match.params.postID;
//     console.log(id);
//     const projects = state.firestore.data.projects;
//     console.log(projects)
//     const project = projects ? projects[id] : null;
//     console.log(project);
//     return {
//         project: project,
//         auth: state.firebase.auth,
//         //   profile : state.firebase.profile
//     }
// }
export default UserDetails