async function removeAllReminders() {
  let remindersList = document.querySelectorAll(
    '[data-reminders-group-id="COMPLETED"]'
  );
  let reminders_array = [...remindersList];
  let reminders_id_array = [];
  reminders_array.forEach((div) => {
    reminders_id_array.push(div.getAttribute("data-reminder-id"));
  });
  reminders_id_array = [...new Set(reminders_id_array)];
  console.log(reminders_id_array.length);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  for (let i = 0; i < reminders_id_array.length; i++) {
    if (i > 0 && i % 10 == 0) {
      console.log("Sleeping for 10 seconds");
      await sleep(10000);
    }
    const response = await fetch(
      `https://reminders.google.com/_/AssistantRemindersWebUi/data/batchexecute?rpcids=EQEjqe&source-path=%2Fid%2F${reminders_id_array[i]}&f.sid=-5102242574385453696&bl=boq_assistantreminderswebuiserver_20221031.07_p0&hl=en-GB&soc-app=1&soc-platform=1&soc-device=1&_reqid=1358216&rt=c`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          "sec-ch-ua":
            '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
          "sec-ch-ua-arch": '"x86"',
          "sec-ch-ua-bitness": '"64"',
          "sec-ch-ua-full-version": '"105.0.5195.127"',
          "sec-ch-ua-full-version-list":
            '"Google Chrome";v="105.0.5195.127", "Not)A;Brand";v="8.0.0.0", "Chromium";v="105.0.5195.127"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "",
          "sec-ch-ua-platform": '"Windows"',
          "sec-ch-ua-platform-version": '"14.0.0"',
          "sec-ch-ua-wow64": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-client-data": "",
          "x-same-domain": "1",
        },
        referrer: "https://reminders.google.com/",
        referrerPolicy: "origin",
        body: `f.req=%5B%5B%5B%22EQEjqe%22%2C%22%5Bnull%2C%5B%5B%5C%22${reminders_id_array[i]}%5C%22%2C%5C%22assistant_635f4ae1_0000_2a18_9929_089e08285144%5C%22%5D%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=ACsV_vmpndh8sQIGK-YwTxqWBhqx%3A1667405409914&`,
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );
    console.log(i);
  }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeAllReminders,
    });
  }
});
