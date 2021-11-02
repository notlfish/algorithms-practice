const meetingPlanner = (slotsA, slotsB, dur) => {
  let indexA = 0;
  let indexB = 0;
  while (indexA < slotsA.length && indexB < slotsB.length) {
    let startDur = Math.max(slotsA[indexA][0], slotsB[indexB][0]);
    let endDur = Math.min(slotsA[indexA][1], slotsB[indexB][1]);
    if (endDur - startDur >= dur) {
      return [startDur, startDur + dur];
    }
    if (slotsA[indexA][1] < slotsB[indexB][1]) {
      indexA = indexA + 1;
    } else {
      indexB = indexB + 1;
    }
  }
  return [];
};

// time complexity is linear O(n+m) where n and m are lengths of slotsA and SlotsB
//space complexity it will be constant space O(1)
