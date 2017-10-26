import Vector from './Vector';
import Quaternion from './Quaternion';

export interface CubeParameters {
  minExtent: Vector;
  maxExtent: Vector;
  position?: Vector;
  rotation?: Quaternion;
  diffuseColor: number[];
  phongExponent: number;
  specularColor: number[];
  refractiveIndex?: number;
  reflectivity?: number;
}

export default class Cube {
  private rotation: Quaternion;

  public minExtent: Vector;
  public maxExtent: Vector;
  public position: Vector;
  public diffuseColor: number[];
  public phongExponent: number;
  public specularColor: number[];
  public refractiveIndex: number;
  public reflectivity: number;

  constructor({
    minExtent,
    maxExtent,
    position = new Vector(0, 0, 0),
    rotation,
    diffuseColor,
    phongExponent,
    specularColor,
    refractiveIndex = 1.4,
    reflectivity = 0.2,
  }: CubeParameters) {
    this.minExtent = minExtent;
    this.maxExtent = maxExtent;
    this.position = position;
    this.rotation = rotation;
    this.diffuseColor = diffuseColor;
    this.phongExponent = phongExponent;
    this.specularColor = specularColor;
    this.refractiveIndex = refractiveIndex;
    this.reflectivity = reflectivity;
  }

  public rotateOnAxis(theta: number, axis: Vector): void {
    let v: Vector;
    v = Vector.scale(Math.sin(-theta / 2), Vector.normalize(axis));
    this.rotation = new Quaternion(Math.cos(theta / 2), v.x, v.y, v.z); // represents inverse of the rotation
  }

  public getInverseRotationMatrix(): number[] {
    if (!this.rotation) {
      return [1, 0, 0,
              0, 1, 0,
              0, 0, 1];
    }
    return this.rotation.getAsRotationMatrixElements();
  }
}
