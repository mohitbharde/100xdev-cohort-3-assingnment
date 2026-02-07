import * as fabric from "fabric";

export async function createSvgPattern(
  svg: string,
  size = 20
): Promise<fabric.Pattern> {
  const { objects, options } = await fabric.loadSVGFromString(svg);

  const validObjects = objects.filter(
    (obj): obj is fabric.FabricObject => obj !== null
  );

  const group = fabric.util.groupSVGElements(validObjects, options);

  group.scaleToWidth(size);
  group.scaleToHeight(size);

  const patternCanvas = new fabric.StaticCanvas("", {
    width: size,
    height: size,
  });

  group.set({
    left: size / 2,
    top: size / 2,
    originX: "center",
    originY: "center",
  });

  patternCanvas.add(group);
  patternCanvas.renderAll();

  return new fabric.Pattern({
    source: patternCanvas.getElement(),
    repeat: "repeat",
  });
}
