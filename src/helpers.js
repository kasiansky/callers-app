function timestrToSec(timestr) {
  var parts = timestr.split(":");
  return parts[0] * 3600 + parts[1] * 60 + +parts[2];
}

function pad(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return "" + num;
  }
}

function formatTime(seconds) {
  return [
    pad(Math.floor(seconds / 3600)),
    pad(Math.floor(seconds / 60) % 60),
    pad(seconds % 60),
  ].join(":");
}

export const getSortedCustomersWithTotal = (customers, calls) => {
  const modifiedCustomers = customers.map((customerData) => {
    const customer = { ...customerData };
    const totalCallTimesArray = [];
    customer.callRecords = [];
    if (customer.phoneNumbers.length) {
      customer.phoneNumbers.forEach((phoneNumber) => {
        calls.forEach((call) => {
          if (call.phoneNumber === phoneNumber) {
            totalCallTimesArray.push(call.callTime);
            customer.callRecords.push(call);
          }
        });
      });
    }
    if (totalCallTimesArray.length) {
      const timeSeconds = totalCallTimesArray.map((call) => timestrToSec(call));
      const sum = timeSeconds.reduce((a, b) => a + b, 0);
      customer.totalCallTimeInSeconds = sum;
      customer.totalCallTime = formatTime(sum);
    } else {
      customer.totalCallTimeInSeconds = 0;
      customer.totalCallTime = 0;
    }
    return customer;
  });
  return modifiedCustomers.sort(
    (a, b) => b.totalCallTimeInSeconds - a.totalCallTimeInSeconds
  );
};
