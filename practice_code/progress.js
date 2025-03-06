/* node handbook (output to the command line) try to test this function */
import progressBar from 'progress';
const bar = new progressBar(':bar', {total: 10});
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete)
        clearInterval(timer);
}, 100);
