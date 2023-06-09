export interface TestData {
  title: string;
  text: string;
  meta?: any;
}

export const DATA_ONE = {
  title: 'Empty',
  text: JSON.stringify({
    elements: [],
    appState: {},
    scrollToContent: true
  })
};
export const DATA_TWO = {
  title: 'Rectangle', text: JSON.stringify({
    elements: [{
      id: '6sVDp9mCGQTomD9Cg5w1b',
      type: 'rectangle',
      x: 202.04296875,
      y: -672.6953125,
      width: 163,
      height: 185,
      angle: 0,
      strokeColor: '#000000',
      backgroundColor: '#e64980',
      fillStyle: 'solid',
      strokeWidth: 1,
      strokeStyle: 'solid',
      roughness: 1,
      opacity: 100,
      groupIds: [],
      strokeSharpness: 'sharp',
      seed: 1640006454,
      version: 74,
      versionNonce: 1054194038,
      isDeleted: false,
      boundElements: [
        {
          type: 'text',
          id: 'MB9CSH621UIKH8MEgOhaM'
        }
      ],
      updated: 1639729535736,
      customData: {
        id: 'rect-1',
        version: '1'
      }
    }],
    appState: {
      viewBackgroundColor: '#AFEEEE',
    },
    scrollToContent: true,
    libraryItems: [
      [
        {
          type: 'line',
          version: 1699,
          versionNonce: 1813275999,
          isDeleted: false,
          id: '1OMHrnYMU3LJ3w3IaXU_R',
          fillStyle: 'hachure',
          strokeWidth: 1,
          strokeStyle: 'solid',
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 209.72304760646858,
          y: 338.83587294718825,
          strokeColor: '#881fa3',
          backgroundColor: '#be4bdb',
          width: 116.42036295658873,
          height: 103.65107323746608,
          seed: 1445523839,
          groupIds: [],
          strokeSharpness: 'sharp',
          boundElementIds: [],
          startBinding: null,
          endBinding: null,
          points: [
            [-92.28090097254909, 7.105427357601002e-15],
            [-154.72281841151394, 19.199290805487394],
            [-155.45758928571422, 79.43840749607878],
            [-99.89923520113778, 103.6510732374661],
            [-40.317783799181804, 79.1587107641305],
            [-39.037226329125524, 21.285677238400705],
            [-92.28090097254909, 7.105427357601002e-15]
          ],
          lastCommittedPoint: null,
          startArrowhead: null,
          endArrowhead: null
        }
      ]
    ]
  })
};

export const DATA_UNSUPPORTED = {title: 'Unsupported', text: JSON.stringify('blah')};

export const TEST_DATA: TestData[] = [DATA_ONE, DATA_TWO, DATA_UNSUPPORTED];
