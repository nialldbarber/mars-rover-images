export const cameras: Record<
  string,
  {
    id: number
    camera: string
  }[]
> = {
  curiosity: [
    {id: 1, camera: 'FHAZ'},
    {id: 2, camera: 'RHAZ'},
    {id: 3, camera: 'MAST'},
    {id: 4, camera: 'CHEMCAM'},
    {id: 5, camera: 'MAHLI'},
    {id: 6, camera: 'MARDI'},
    {id: 7, camera: 'NAVCAM'},
  ],
  opportunity: [
    {id: 8, camera: 'FHAZ'},
    {id: 9, camera: 'RHAZ'},
    {id: 10, camera: 'NAVCAM'},
    {id: 11, camera: 'PANCAM'},
    {id: 12, camera: 'MINITES'},
  ],
  spirit: [
    {id: 13, camera: 'FHAZ'},
    {id: 14, camera: 'RHAZ'},
    {id: 15, camera: 'MAST'},
    {id: 16, camera: 'CHEMCAM'},
    {id: 17, camera: 'MAHLI'},
    {id: 18, camera: 'MARDI'},
    {id: 19, camera: 'NAVCAM'},
  ],
}
