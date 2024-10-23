const stocks = {
    "0":["Adobe", "ADBE", '$523.70', '2.37'],
    "1":["Airbnb", "ABNB", '$131.53', '-1.95'],
    "2":["Amazon", "AMZN", '$193.88', '47.70'],
    "3":["American Express", "AXP", '$265.90', '73.53'],
    "4":["Apple", "AAPL", '$226.77', '28.79'],
    "5":["AT&T", "T", '$21.54', '42.99'],
    "6":["Best Buy", "BBY", '$98.93', '41.75'],
    "7":["Boeing", "BA", '$155.37', '-21.62'],
    "8":["BlackRock", "BLK", '$941.94', '43.25'],
    "9":["Coca-Cola", "KO", '$71.64', '25.67'],
    "10":["Dell", "DELL", '$117.01', '67.51'],
    "11":["Dominos", "DPZ", '$426.84', '11.41'],
    "12":["Ebay", "EBAY", '$65.44', '49.34'],
    "13":["Electronic Arts", "EA", '$141.64', '18.32'],
    "14":["FedEx", "FDX", '$267.13', '0.26'],
    "15":["Google", "GOOG", '$163.55', '23.74'],
    "16":["HP", "HPQ", '$35.84', '36.27'],
    "17":["Manchester United", "MANU", '$16.00', '-17.36'],
    "18":["Mastercard", "MA", '$487.66', '21.16'],
    "19":["McDonald's", "MCD", '$300.27', '11.30'],
    "20":["Meta", "META", '$563.33', '87.26'],
    "21":["Microsoft", "MSFT", '$429.17', '35.15'],
    "22":["Morgan Stanley", "MS", '$102.58', '23.55'],
    "23":["Netflix", "NFLX", '$722.26', '87.70'],
    "24":["Nike", "NKE", '$87.46', '-3.47'],
    "25":["Nvidia", "NVDA", '$120.87', '186.29'],
    "26":["PepsiCo", "PEP", '$169.92', '-2.53'],
    "27":["Pfizer", "PFE", '$29.50', '-10.55'],
    "28":["Target", "TGT", '$156.18', '39.12'],
    "29":["Tesla", "TSLA", '$254.36', '2.95'],
    "30":["Uber", "UBER", '$77.44', '72.43'],
    "31":["Walmart", "WMT", '$80.67', '48.40'],
    "32":["Walt Disney", "DIS", '$93.69', '0.76']
}

var currentScore = 0;
let gameMode;
let textContent;
let sliceNumber;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.game-btn').forEach(button => {
        button.addEventListener('click', function(){
            const buttonId = this.id
            if (buttonId == 'annual') {
                gameMode = 3;
                textContent = 'Annual Return from 09/23-09/24';
                sliceNumber = 0;
            } else {
                gameMode = 2;
                textContent = 'stock price as of 09/24';
                sliceNumber = 1;
            }
            // menu is hidden and the game page is shown
            document.querySelector('.menu').style.display = 'none';
            document.querySelector('.game').style.display = 'flex';

            // random number to pick a random stock
            var randomLeft = Math.floor(Math.random() * 32)
            // random number used to show the stocks details
            document.querySelector('.stock-name-l').textContent = `${stocks[randomLeft][0]}`
            document.querySelector('.stock-ticker-l').textContent = `${stocks[randomLeft][1]}`
            document.querySelector('.stock-value-l').textContent = `${stocks[randomLeft][gameMode]}${(gameMode == 3 ? '%' : '')}`
            document.querySelector('.stock-para-l').textContent = textContent
            document.querySelector('.stock-img-l').src = `../images/horl/${stocks[randomLeft][1]}.png`;

            // random number to pick the right stock, then used to display the stock details
            var randomRight = Math.floor(Math.random() * 32)
            document.querySelector('.stock-name-r').textContent = `${stocks[randomRight][0]}`
            document.querySelector('.stock-ticker-r').textContent = `${stocks[randomRight][1]}`
            document.querySelector('.stock-value-r').textContent = `${stocks[randomRight][gameMode]}${(gameMode == 3 ? '%' : '')}`
            document.querySelector('.stock-para-r').textContent = textContent
            document.querySelector('.stock-img-r').src = `../images/horl/${stocks[randomRight][1]}.png`;

            // random right copy
            var currentRight = randomRight;
            var nextRight;

            // if the next button pops up and is clicked
            document.querySelector('.next-btn').addEventListener('click', async function(){
                // removes the next button and shows makes the middle circle the vs image
                document.querySelector('.next-btn').style.display = 'none';
                document.querySelector('.middle-circle').src = `../images/horl/vs.png`;

                // if its the first round
                if (currentScore == 0) {
                    // shows the random right stock selected at the beginning
                    document.querySelector('.stock-name-l').textContent = `${stocks[currentRight][0]}`
                    document.querySelector('.stock-ticker-l').textContent = `${stocks[currentRight][1]}`
                    document.querySelector('.stock-value-l').textContent = `${stocks[currentRight][gameMode]}${(gameMode == 3 ? '%' : '')}`
                    document.querySelector('.stock-para-l').textContent = textContent
                    document.querySelector('.stock-img-l').src = `../images/horl/${stocks[currentRight][1]}.png`;
                // if it is not the first round as score is 1 or more
                } else {
                    // the right that was assigned at the end of the first round is moved to the left side
                    var prevRight = nextRight
                    document.querySelector('.stock-name-l').textContent = `${stocks[prevRight][0]}`
                    document.querySelector('.stock-ticker-l').textContent = `${stocks[prevRight][1]}`
                    document.querySelector('.stock-value-l').textContent = `${stocks[prevRight][gameMode]}${(gameMode == 3 ? '%' : '')}`
                    document.querySelector('.stock-para-l').textContent = textContent
                    document.querySelector('.stock-img-l').src = `../images/horl/${stocks[prevRight][1]}.png`;
                    
                    currentRight = nextRight
                }

                // new random right stock details as the round has finished and a new round will begin
                nextRight = Math.floor(Math.random() * 32)
                document.querySelector('.stock-name-r').textContent = `${stocks[nextRight][0]}`
                document.querySelector('.stock-ticker-r').textContent = `${stocks[nextRight][1]}`
                document.querySelector('.stock-value-r').textContent = `${stocks[nextRight][gameMode]}${(gameMode == 3 ? '%' : '')}`
                document.querySelector('.stock-para-r').textContent = textContent
                document.querySelector('.stock-img-r').src = `../images/horl/${stocks[nextRight][1]}.png`;
                document.querySelector('.stock-value-r').style.display = 'none';
                document.querySelector('.stock-btns-r').style.display = 'block';

                // score is increased as to click next you need to get it correct
                currentScore += 1;
            })

            // if the higher button is pressed on the stock as the users guess
            document.querySelector('.stock-btn-h').addEventListener('click', function(){
                // if it is round 1
                if (currentScore == 0) {
                    // if the right stocks value is more/equal to the stock on the left (the user is correct)
                    if (parseFloat(stocks[randomRight][gameMode].slice(sliceNumber)) >= parseFloat(stocks[randomLeft][gameMode].slice(sliceNumber))) {    // maybe up the score here instead of in the next button
                        // middle circle is changed to a tick and the next button is shown
                        document.querySelector('.middle-circle').src = `../images/horl/tick.png`;
                        document.querySelector('.next-btn').style.display = 'flex';
                    } else {
                        // if user is wrong middle circle is changed to an X and game over
                        document.querySelector('.middle-circle').src = `../images/horl/X.png`;
                        setTimeout(displayEndMenu, 1000);
                    }
                // if it is not round 1 and the user has already won one round
                } else {
                    // if the user is correct, shows next button and the middle circle is a tick
                    if (parseFloat(stocks[nextRight][gameMode].slice(sliceNumber)) >= parseFloat(stocks[currentRight][gameMode].slice(sliceNumber))) {
                        document.querySelector('.middle-circle').src = `../images/horl/tick.png`;
                        document.querySelector('.next-btn').style.display = 'flex';
                    // if the user is incorrect the middle circle is an x and game over
                    } else {
                        document.querySelector('.middle-circle').src = `../images/horl/X.png`;
                        setTimeout(displayEndMenu, 1000);
                    }
                }
                // hides the value and shows the buttons 
                document.querySelector('.stock-value-r').style.display = 'block';
                document.querySelector('.stock-btns-r').style.display = 'none';
            })

            // same as higher button but checks the opposite
            document.querySelector('.stock-btn-l').addEventListener('click', function(){
                if (currentScore == 0) {
                    if (parseFloat(stocks[randomRight][gameMode].slice(sliceNumber)) <= parseFloat(stocks[randomLeft][gameMode].slice(sliceNumber))) {
                        document.querySelector('.middle-circle').src = `../images/horl/tick.png`;
                        document.querySelector('.next-btn').style.display = 'flex';
                    } else {
                        document.querySelector('.middle-circle').src = `../images/horl/X.png`;
                        setTimeout(displayEndMenu, 1000);
                    }
                } else {
                    if (parseFloat(stocks[nextRight][gameMode].slice(sliceNumber)) <= parseFloat(stocks[currentRight][gameMode].slice(sliceNumber))) {
                        document.querySelector('.middle-circle').src = `../images/horl/tick.png`;
                        document.querySelector('.next-btn').style.display = 'flex';
                    } else {
                        document.querySelector('.middle-circle').src = `../images/horl/X.png`;
                        setTimeout(displayEndMenu, 1000);
                    }
                }
                document.querySelector('.stock-value-r').style.display = 'block';
                document.querySelector('.stock-btns-r').style.display = 'none';
            })

            document.querySelector('.back-btn').addEventListener('click', function(){
                document.querySelector('.menu').style.display = 'block';
                document.querySelector('.game').style.display = 'none';
                location.reload();
            })
        })
    })
})

function displayEndMenu() {
    document.querySelector('.end-score').textContent = `${currentScore}`
    document.querySelector('.end-screen').style.display = 'block';
    document.querySelector('.middle-circle').style.display = 'none';
    document.querySelectorAll('.blur').forEach(element => {
        element.style.filter = 'blur(4px)';
    });
}