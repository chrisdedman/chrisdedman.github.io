import ImgBinary from "~/media/binary.jpeg?jsx";
import ImgNum from "~/media/num.jpeg?jsx";

import { component$ } from '@builder.io/qwik';
 
export default component$(() => {
    return (
        <section class="section bright">
        <div class="container container-flex">
            <div q:slot="title">
                <ImgNum/>
                <br></br>
                <br></br>
                <i>The original article has been published on my previous blog. I re-shared it here as a useful reference!</i>
                <br></br>
                <br></br> 
                What is <b>Hexadecimal</b>? It is a <b>base 16</b> number starting with <b>0 – 9</b> (<i>representing the first 10 digits</i>) and <b>A – F</b>
                (<i>representing the 6 last digit, where A represent the decimal 10 and F represent the decimal 15</i>).
                <br></br> 
                <br></br>
                What about <b>binary</b>? It is a <b>base 2</b> number that contain <b>1s and 0s</b>. To understand what I
                am going to tell you, you need to understand how our <b>decimal number system</b> work, and that a regular decimal number is
                the sum of the digits multiplied with a power of its base 10 (<i>because decimal numbers are base 10</i>).

                <h4>Decimal Numbers</h4>
                 
                For example, the decimal number <b>256</b> in base 10 is equal to each digit multiplied with its corresponding power and its base 10:
                <br></br>
                <br></br>
                (<i><u>start to the right for the power of 0 and go to the left for the next power</u></i>)
                <ul>
                    <li>6 x (10<sup>0</sup> = 1) So, 6 x 1 = 6</li>
                    <li>5 x (10<sup>1</sup> = 10) So, 5 x 10 = 50</li>
                    <li>2 x (10<sup>2</sup> = 100) So, 2 x 100 = 200</li>
                </ul>
                <br></br>
                Adding up the result of each will give: <b>200 + 50 + 6 = 256</b>
                
                <h4>Hexadecimal Numbers</h4>
                    
                Now that you know that, you can implement the same process for <b>hexadecimal numbers</b> and its corresponding power and base 16.
                Let’s take the example of the Hex Digit: AE26
                <br></br>
                <ul>
                    <li>6 x (16<sup>0</sup> = 1) So, 6 x 1 = 6</li>
                    <li>2 x (16<sup>1</sup> = 16) So, 2 x 16 = 32</li>
                    <li>E x (16<sup>2</sup> = 16 x 16 = 256) So, E = 14 x 256 = 3584</li>
                    <li>A x (16<sup>3</sup> = 16 x 16 x 16 = 4096) So, A = 10 x 4096 = 40960</li>
                </ul>
                <br></br>
                So, to find the result of the Hex Digit <b>AE26</b>, you will have to add each result found: <b>40960 + 3584 + 32 + 6 = 44582</b>
                <br></br>
                <br></br>
                <ImgBinary/>
                <br></br>
                <h4>Binary Numbers</h4>
                
                It is the same process with the <b>binary numbers</b> and its corresponding power and base 2. 
                For example, the binary number 1011 it will be:
                <ul> 
                    <li>1 x (2<sup>0</sup> = 1) So, 1 x 1 = 1</li>
                    <li>1 x (2<sup>1</sup> = 2) So, 1 x 2 = 2</li>
                    <li>0 x (2<sup>2</sup> = 4) So, 0 x 4 = 0</li>
                    <li>1 x (2<sup>3</sup> = 8) So, 1 x 8 = 8</li>
                </ul>
                <br></br>
                When you do the sum of all that, it is equal to 11 (eleven). So, the binary number <b>1011</b> is equal to the decimal number
                <b>11</b> (<i>eleven</i>). That’s it!
                <br></br>
                <br></br>
                Here are some key ideas to memorize;
                <br></br>
                <ul>
                    - Always start from the right to the left when doing the math.<br></br>
                    - Decimal Numbers are based 10<br></br>
                    - Hexadecimal Numbers are base 16<br></br>
                    - Binary Numbers are base 2<br></br>
                </ul>
                <br></br>
                I hope you found this article useful. Feel free to share it if you think it can be useful for someone else.
                Happy Math! &#128516;
            </div>
        </div>
        </section>
    )
});