function heavyTask() {
    const heavyTaskTime = new Date();
    console.log("Starting heavy task", heavyTaskTime.toJSON());
    let sum = 10;

    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }

    console.log(
        "Finished heavy task. Elapsed: ",
        new Date().getTime() - heavyTaskTime.getTime()
    );
}

heavyTask();
