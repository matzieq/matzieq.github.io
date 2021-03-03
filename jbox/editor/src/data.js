const palette = [
  "#fbf5ef",
  "#f2d3ab",
  "#c69fa5",
  "#8b6d9c",
  "#494d7e",
  "#272744",
];

const initialDataState = {
  sprites: Array(MAX_SPRITES)
    .fill(0)
    .map(() =>
      Array(TILE_SIZE)
        .fill(0)
        .map(() => Array(TILE_SIZE).fill(5))
    ),
  spriteFlags: Array(MAX_SPRITES).fill(0),
  tileMap: Array(MAX_TILEMAP_SCREENS)
    .fill(0)
    .map(() =>
      Array(TILEMAP_SIZE)
        .fill(0)
        .map(() => Array(TILEMAP_SIZE).fill(0))
    ),

  sfx: Array(MAX_SOUNDS)
    .fill(0)
    .map(() => ({
      tempo: 1,
      samples: Array(SOUND_SAMPLE_COUNT)
        .fill(0)
        .map(() => ({
          type: "sine",
          dist: 0,
          oct: 0,
          volume: 0,
          fx: null,
        })),
    })),
};
const randomdataState = {
  sprites: Array(MAX_SPRITES)
    .fill(0)
    .map(() =>
      Array(TILE_SIZE)
        .fill(0)
        .map(() =>
          Array(TILE_SIZE)
            .fill(5)
            .map(() => Math.floor(Math.random() * 5))
        )
    ),
  spriteFlags: Array(MAX_SPRITES)
    .fill(0)
    .map(() => Math.floor(Math.random() * 255)),
  tileMap: Array(MAX_TILEMAP_SCREENS)
    .fill(0)
    .map(() =>
      Array(TILEMAP_SIZE)
        .fill(0)
        .map(() =>
          Array(TILEMAP_SIZE)
            .fill(0)
            .map(() => Math.floor(Math.random() * 64))
        )
    ),

  sfx: Array(MAX_SOUNDS)
    .fill(0)
    .map(() => ({
      tempo: Math.floor(Math.random() * 32),
      samples: Array(SOUND_SAMPLE_COUNT)
        .fill(0)
        .map(() => ({
          type: "sine",
          dist: Math.floor(Math.random() * 24),
          oct: Math.floor(Math.random() * 3),
          volume: Math.floor(Math.random() * 5),
          fx: null,
        })),
    })),
};
