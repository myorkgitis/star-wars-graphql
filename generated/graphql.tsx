import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The Any scalar type is used in operations and types that involve any type of value. */
  Any: any;
  /** The Bytes scalar type is used in operations and types that involve base 64 binary data. */
  Bytes: any;
  /** The Date scalar type is used in operations and types that involve dates. */
  Date: any;
  /** The File scalar type is used in operations and types that involve files. */
  File: any;
  /** The Object scalar type is used in operations and types that involve objects. */
  Object: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
export type ArrayResult = Character | Element | Film | Planet | Role | Specie | Starship | User | Vehicle;

/** The ArrayWhereInput input type is used in operations that involve filtering objects by a field of type Array. */
export type ArrayWhereInput = {
  /** This is the containedBy operator to specify a constraint to select the objects where the values of an array field is contained by another specified array. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the contains operator to specify a constraint to select the objects where the values of an array field contain all elements of another specified array. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Any']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Any']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Any']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Any']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Any']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Any']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The BooleanWhereInput input type is used in operations that involve filtering objects by a field of type Boolean. */
export type BooleanWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The BoxInput type is used to specifiy a box operation on a within geo query. */
export type BoxInput = {
  /** This is the bottom left coordinates of the box. */
  bottomLeft: GeoPointInput;
  /** This is the upper right coordinates of the box. */
  upperRight: GeoPointInput;
};

/** The BytesWhereInput input type is used in operations that involve filtering objects by a field of type Bytes. */
export type BytesWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Bytes']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Bytes']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Bytes']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Bytes']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Bytes']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Bytes']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Bytes']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Bytes']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The CenterSphereInput type is used to specifiy a centerSphere operation on a geoWithin query. */
export type CenterSphereInput = {
  /** This is the center of the sphere. */
  center: GeoPointInput;
  /** This is the radius of the sphere. */
  distance: Scalars['Float'];
};

/** The Character object type is used in operations that involve outputting objects of Character class. */
export type Character = ParseObject & {
  __typename?: 'Character';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object birthYear. */
  birthYear?: Maybe<Scalars['String']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object eyeColor. */
  eyeColor?: Maybe<Scalars['String']>;
  /** This is the object films. */
  films: FilmFindResult;
  /** This is the object gender. */
  gender?: Maybe<Scalars['String']>;
  /** This is the object hairColor. */
  hairColor?: Maybe<Scalars['String']>;
  /** This is the object height. */
  height?: Maybe<Scalars['Float']>;
  /** This is the object homeworld. */
  homeworld?: Maybe<Planet>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object mass. */
  mass?: Maybe<Scalars['Float']>;
  /** This is the object name. */
  name?: Maybe<Scalars['String']>;
  /** This is the object skinColor. */
  skinColor?: Maybe<Scalars['String']>;
  /** This is the object species. */
  species: SpecieFindResult;
  /** This is the object starships. */
  starships: StarshipFindResult;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the object vehicles. */
  vehicles: VehicleFindResult;
};


/** The Character object type is used in operations that involve outputting objects of Character class. */
export type CharacterFilmsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<FilmOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilmWhereInput>;
};


/** The Character object type is used in operations that involve outputting objects of Character class. */
export type CharacterSpeciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SpecieOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecieWhereInput>;
};


/** The Character object type is used in operations that involve outputting objects of Character class. */
export type CharacterStarshipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<StarshipOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StarshipWhereInput>;
};


/** The Character object type is used in operations that involve outputting objects of Character class. */
export type CharacterVehiclesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<VehicleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VehicleWhereInput>;
};

/** The CharacterFindResult object type is used in the Character find query to return the data of the matched objects. */
export type CharacterFindResult = {
  __typename?: 'CharacterFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Character>;
};

/** The CharacterOrder input type is used when sorting objects of the Character class. */
export enum CharacterOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  BirthYearAsc = 'birthYear_ASC',
  BirthYearDesc = 'birthYear_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EyeColorAsc = 'eyeColor_ASC',
  EyeColorDesc = 'eyeColor_DESC',
  FilmsAsc = 'films_ASC',
  FilmsDesc = 'films_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  HairColorAsc = 'hairColor_ASC',
  HairColorDesc = 'hairColor_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  HomeworldAsc = 'homeworld_ASC',
  HomeworldDesc = 'homeworld_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MassAsc = 'mass_ASC',
  MassDesc = 'mass_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SkinColorAsc = 'skinColor_ASC',
  SkinColorDesc = 'skinColor_DESC',
  SpeciesAsc = 'species_ASC',
  SpeciesDesc = 'species_DESC',
  StarshipsAsc = 'starships_ASC',
  StarshipsDesc = 'starships_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VehiclesAsc = 'vehicles_ASC',
  VehiclesDesc = 'vehicles_DESC'
}

/** Allow to link OR add and link an object of the Character class. */
export type CharacterPointerInput = {
  /** Create and link an object from Character class. */
  createAndLink?: InputMaybe<CreateCharacterFieldsInput>;
  /** Link an existing object from Character class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The CharacterPointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Character class. */
export type CharacterPointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Character class into a relation field. */
export type CharacterRelationInput = {
  /** Add an existing object from the Character class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Character class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateCharacterFieldsInput>>;
  /** Remove an existing object from the Character class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The CharacterWhereInput input type is used in operations that involve filtering objects of Character class. */
export type CharacterWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<CharacterWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  /** This is the object birthYear. */
  birthYear?: InputMaybe<StringWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object eyeColor. */
  eyeColor?: InputMaybe<StringWhereInput>;
  /** This is the object gender. */
  gender?: InputMaybe<StringWhereInput>;
  /** This is the object hairColor. */
  hairColor?: InputMaybe<StringWhereInput>;
  /** This is the object height. */
  height?: InputMaybe<NumberWhereInput>;
  /** This is the object homeworld. */
  homeworld?: InputMaybe<PlanetPointerWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object mass. */
  mass?: InputMaybe<NumberWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object skinColor. */
  skinColor?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The Class type is used to return the information about an object class. */
export type Class = {
  __typename?: 'Class';
  /** This is the name of the object class. */
  name: Scalars['String'];
  /** These are the schema's fields of the object class. */
  schemaFields: Array<SchemaField>;
};

/** The CreateCharacterFieldsInput input type is used in operations that involve creation of objects in the Character class. */
export type CreateCharacterFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object birthYear. */
  birthYear?: InputMaybe<Scalars['String']>;
  /** This is the object eyeColor. */
  eyeColor?: InputMaybe<Scalars['String']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object gender. */
  gender?: InputMaybe<Scalars['String']>;
  /** This is the object hairColor. */
  hairColor?: InputMaybe<Scalars['String']>;
  /** This is the object height. */
  height?: InputMaybe<Scalars['Float']>;
  /** This is the object homeworld. */
  homeworld?: InputMaybe<PlanetPointerInput>;
  /** This is the object mass. */
  mass?: InputMaybe<Scalars['Float']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object skinColor. */
  skinColor?: InputMaybe<Scalars['String']>;
  /** This is the object species. */
  species?: InputMaybe<SpecieRelationInput>;
  /** This is the object starships. */
  starships?: InputMaybe<StarshipRelationInput>;
  /** This is the object vehicles. */
  vehicles?: InputMaybe<VehicleRelationInput>;
};

/** The CreateFilmFieldsInput input type is used in operations that involve creation of objects in the Film class. */
export type CreateFilmFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object characters. */
  characters?: InputMaybe<CharacterRelationInput>;
  /** This is the object director. */
  director?: InputMaybe<Scalars['String']>;
  /** This is the object episodeId. */
  episodeId?: InputMaybe<Scalars['Float']>;
  /** This is the object openingCrawl. */
  openingCrawl?: InputMaybe<Scalars['String']>;
  /** This is the object planets. */
  planets?: InputMaybe<PlanetRelationInput>;
  /** This is the object producer. */
  producer?: InputMaybe<Scalars['String']>;
  /** This is the object releaseDate. */
  releaseDate?: InputMaybe<Scalars['Date']>;
  /** This is the object species. */
  species?: InputMaybe<SpecieRelationInput>;
  /** This is the object starships. */
  starships?: InputMaybe<StarshipRelationInput>;
  /** This is the object title. */
  title?: InputMaybe<Scalars['String']>;
  /** This is the object vehicles. */
  vehicles?: InputMaybe<VehicleRelationInput>;
};

/** The CreatePlanetFieldsInput input type is used in operations that involve creation of objects in the Planet class. */
export type CreatePlanetFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object climate. */
  climate?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the object diameter. */
  diameter?: InputMaybe<Scalars['Float']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object gravity. */
  gravity?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object orbitalPeriod. */
  orbitalPeriod?: InputMaybe<Scalars['Float']>;
  /** This is the object population. */
  population?: InputMaybe<Scalars['Float']>;
  /** This is the object residents. */
  residents?: InputMaybe<CharacterRelationInput>;
  /** This is the object rotationPeriod. */
  rotationPeriod?: InputMaybe<Scalars['Float']>;
  /** This is the object species. */
  species?: InputMaybe<SpecieRelationInput>;
  /** This is the object surfaceWater. */
  surfaceWater?: InputMaybe<Scalars['Float']>;
  /** This is the object terrain. */
  terrain?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
};

/** The CreateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type CreateRoleFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationInput>;
};

/** The CreateSpecieFieldsInput input type is used in operations that involve creation of objects in the Specie class. */
export type CreateSpecieFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object averageHeight. */
  averageHeight?: InputMaybe<Scalars['Float']>;
  /** This is the object averageLifespan. */
  averageLifespan?: InputMaybe<Scalars['Float']>;
  /** This is the object classification. */
  classification?: InputMaybe<Scalars['String']>;
  /** This is the object designation. */
  designation?: InputMaybe<Scalars['String']>;
  /** This is the object eyeColors. */
  eyeColors?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object hairColors. */
  hairColors?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the object homeworld. */
  homeworld?: InputMaybe<PlanetPointerInput>;
  /** This is the object language. */
  language?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object people. */
  people?: InputMaybe<CharacterRelationInput>;
  /** This is the object skinColors. */
  skinColors?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
};

/** The CreateStarshipFieldsInput input type is used in operations that involve creation of objects in the Starship class. */
export type CreateStarshipFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object MGLT. */
  MGLT?: InputMaybe<Scalars['Float']>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: InputMaybe<Scalars['Float']>;
  /** This is the object consumables. */
  consumables?: InputMaybe<Scalars['String']>;
  /** This is the object costInCredits. */
  costInCredits?: InputMaybe<Scalars['Float']>;
  /** This is the object crew. */
  crew?: InputMaybe<Scalars['Float']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object hyperdriveRating. */
  hyperdriveRating?: InputMaybe<Scalars['Float']>;
  /** This is the object length. */
  length?: InputMaybe<Scalars['Float']>;
  /** This is the object manufacturer. */
  manufacturer?: InputMaybe<Scalars['String']>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: InputMaybe<Scalars['Float']>;
  /** This is the object model. */
  model?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object passengers. */
  passengers?: InputMaybe<Scalars['Float']>;
  /** This is the object pilots. */
  pilots?: InputMaybe<CharacterRelationInput>;
  /** This is the object starshipClass. */
  starshipClass?: InputMaybe<Scalars['String']>;
};

/** The CreateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type CreateUserFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  /** This is the object password. */
  password?: InputMaybe<Scalars['String']>;
  /** This is the object username. */
  username?: InputMaybe<Scalars['String']>;
};

/** The CreateVehicleFieldsInput input type is used in operations that involve creation of objects in the Vehicle class. */
export type CreateVehicleFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: InputMaybe<Scalars['Float']>;
  /** This is the object consumables. */
  consumables?: InputMaybe<Scalars['String']>;
  /** This is the object costInCredits. */
  costInCredits?: InputMaybe<Scalars['Float']>;
  /** This is the object crew. */
  crew?: InputMaybe<Scalars['Float']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object length. */
  length?: InputMaybe<Scalars['Float']>;
  /** This is the object manufacturer. */
  manufacturer?: InputMaybe<Scalars['String']>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: InputMaybe<Scalars['Float']>;
  /** This is the object model. */
  model?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object passengers. */
  passengers?: InputMaybe<Scalars['Float']>;
  /** This is the object pilots. */
  pilots?: InputMaybe<CharacterRelationInput>;
  /** This is the object vehicleClass. */
  vehicleClass?: InputMaybe<Scalars['String']>;
};

/** The DateWhereInput input type is used in operations that involve filtering objects by a field of type Date. */
export type DateWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Date']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Date']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Date']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The Element object type is used to return array items' value. */
export type Element = {
  __typename?: 'Element';
  /** Return the value of the element in the array */
  value: Scalars['Any'];
};

/** The FileInfo object type is used to return the information about files. */
export type FileInfo = {
  __typename?: 'FileInfo';
  /** This is the file name. */
  name: Scalars['String'];
  /** This is the url in which the file can be downloaded. */
  url: Scalars['String'];
};

/** The FileWhereInput input type is used in operations that involve filtering objects by a field of type File. */
export type FileWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['File']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['File']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['File']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['File']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['File']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['File']>;
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: InputMaybe<Scalars['String']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['File']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['File']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: InputMaybe<Scalars['String']>;
};

/** The Film object type is used in operations that involve outputting objects of Film class. */
export type Film = ParseObject & {
  __typename?: 'Film';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object characters. */
  characters: CharacterFindResult;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object director. */
  director?: Maybe<Scalars['String']>;
  /** This is the object episodeId. */
  episodeId?: Maybe<Scalars['Float']>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object openingCrawl. */
  openingCrawl?: Maybe<Scalars['String']>;
  /** This is the object planets. */
  planets: PlanetFindResult;
  /** This is the object producer. */
  producer?: Maybe<Scalars['String']>;
  /** This is the object releaseDate. */
  releaseDate?: Maybe<Scalars['Date']>;
  /** This is the object species. */
  species: SpecieFindResult;
  /** This is the object starships. */
  starships: StarshipFindResult;
  /** This is the object title. */
  title?: Maybe<Scalars['String']>;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the object vehicles. */
  vehicles: VehicleFindResult;
};


/** The Film object type is used in operations that involve outputting objects of Film class. */
export type FilmCharactersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<CharacterOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};


/** The Film object type is used in operations that involve outputting objects of Film class. */
export type FilmPlanetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<PlanetOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanetWhereInput>;
};


/** The Film object type is used in operations that involve outputting objects of Film class. */
export type FilmSpeciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SpecieOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecieWhereInput>;
};


/** The Film object type is used in operations that involve outputting objects of Film class. */
export type FilmStarshipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<StarshipOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StarshipWhereInput>;
};


/** The Film object type is used in operations that involve outputting objects of Film class. */
export type FilmVehiclesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<VehicleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VehicleWhereInput>;
};

/** The FilmFindResult object type is used in the Film find query to return the data of the matched objects. */
export type FilmFindResult = {
  __typename?: 'FilmFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Film>;
};

/** The FilmOrder input type is used when sorting objects of the Film class. */
export enum FilmOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CharactersAsc = 'characters_ASC',
  CharactersDesc = 'characters_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DirectorAsc = 'director_ASC',
  DirectorDesc = 'director_DESC',
  EpisodeIdAsc = 'episodeId_ASC',
  EpisodeIdDesc = 'episodeId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OpeningCrawlAsc = 'openingCrawl_ASC',
  OpeningCrawlDesc = 'openingCrawl_DESC',
  PlanetsAsc = 'planets_ASC',
  PlanetsDesc = 'planets_DESC',
  ProducerAsc = 'producer_ASC',
  ProducerDesc = 'producer_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SpeciesAsc = 'species_ASC',
  SpeciesDesc = 'species_DESC',
  StarshipsAsc = 'starships_ASC',
  StarshipsDesc = 'starships_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VehiclesAsc = 'vehicles_ASC',
  VehiclesDesc = 'vehicles_DESC'
}

/** Allow to link OR add and link an object of the Film class. */
export type FilmPointerInput = {
  /** Create and link an object from Film class. */
  createAndLink?: InputMaybe<CreateFilmFieldsInput>;
  /** Link an existing object from Film class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The FilmPointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Film class. */
export type FilmPointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Film class into a relation field. */
export type FilmRelationInput = {
  /** Add an existing object from the Film class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Film class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateFilmFieldsInput>>;
  /** Remove an existing object from the Film class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The FilmWhereInput input type is used in operations that involve filtering objects of Film class. */
export type FilmWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<FilmWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<FilmWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<FilmWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object director. */
  director?: InputMaybe<StringWhereInput>;
  /** This is the object episodeId. */
  episodeId?: InputMaybe<NumberWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object openingCrawl. */
  openingCrawl?: InputMaybe<StringWhereInput>;
  /** This is the object producer. */
  producer?: InputMaybe<StringWhereInput>;
  /** This is the object releaseDate. */
  releaseDate?: InputMaybe<DateWhereInput>;
  /** This is the object title. */
  title?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The FindResult object type is used in the find queries to return the data of the matched objects. */
export type FindResult = {
  __typename?: 'FindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Scalars['Object']>;
};

/** The GeoIntersectsInput type is used to specify a geoIntersects operation on a constraint. */
export type GeoIntersectsInput = {
  /** This is the point to be specified. */
  point?: InputMaybe<GeoPointInput>;
};

/** The GeoPoint object type is used to return the information about geo point fields. */
export type GeoPoint = {
  __typename?: 'GeoPoint';
  /** This is the latitude. */
  latitude: Scalars['Float'];
  /** This is the longitude. */
  longitude: Scalars['Float'];
};

/** The GeoPointInput type is used in operations that involve inputting fields of type geo point. */
export type GeoPointInput = {
  /** This is the latitude. */
  latitude: Scalars['Float'];
  /** This is the longitude. */
  longitude: Scalars['Float'];
};

/** The GeoPointWhereInput input type is used in operations that involve filtering objects by a field of type GeoPoint. */
export type GeoPointWhereInput = {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the geoWithin operator to specify a constraint to select the objects where the values of a geo point field is within a specified polygon or sphere. */
  geoWithin?: InputMaybe<GeoWithinInput>;
  /** This is the maxDistance operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistance?: InputMaybe<Scalars['Float']>;
  /** This is the maxDistanceInKilometers operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in kilometers) from the geo point specified in the $nearSphere operator. */
  maxDistanceInKilometers?: InputMaybe<Scalars['Float']>;
  /** This is the maxDistanceInMiles operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in miles) from the geo point specified in the $nearSphere operator. */
  maxDistanceInMiles?: InputMaybe<Scalars['Float']>;
  /** This is the maxDistanceInRadians operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistanceInRadians?: InputMaybe<Scalars['Float']>;
  /** This is the nearSphere operator to specify a constraint to select the objects where the values of a geo point field is near to another geo point. */
  nearSphere?: InputMaybe<GeoPointInput>;
  /** This is the within operator to specify a constraint to select the objects where the values of a geo point field is within a specified box. */
  within?: InputMaybe<WithinInput>;
};

/** The GeoWithinInput type is used to specify a geoWithin operation on a constraint. */
export type GeoWithinInput = {
  /** This is the sphere to be specified. */
  centerSphere?: InputMaybe<CenterSphereInput>;
  /** This is the polygon to be specified. */
  polygon?: InputMaybe<Array<GeoPointInput>>;
};

/** An entry from an object, i.e., a pair of key and value. */
export type KeyValueInput = {
  /** The key used to retrieve the value of this entry. */
  key: Scalars['String'];
  /** The value of the entry. Could be any type of scalar data. */
  value: Scalars['Any'];
};

/** The LogInFieldsInput input type is used to login. */
export type LogInFieldsInput = {
  /** This is the password used to log the user in. */
  password: Scalars['String'];
  /** This is the username used to log the user in. */
  username: Scalars['String'];
};

/** Mutation is the top level type for mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** The createCharacter mutation can be used to create a new object of the Character class. */
  createCharacter: Character;
  /** The createClass mutation can be used to create the schema for a new object class. */
  createClass: Class;
  /** The create mutation can be used to create and upload a new file. */
  createFile: FileInfo;
  /** The createFilm mutation can be used to create a new object of the Film class. */
  createFilm: Film;
  /** The createPlanet mutation can be used to create a new object of the Planet class. */
  createPlanet: Planet;
  /** The createRole mutation can be used to create a new object of the Role class. */
  createRole: Role;
  /** The createSpecie mutation can be used to create a new object of the Specie class. */
  createSpecie: Specie;
  /** The createStarship mutation can be used to create a new object of the Starship class. */
  createStarship: Starship;
  /** The createUser mutation can be used to create a new object of the User class. */
  createUser: User;
  /** The createVehicle mutation can be used to create a new object of the Vehicle class. */
  createVehicle: Vehicle;
  /** The deleteCharacter mutation can be used to delete an object of the Character class. */
  deleteCharacter: Character;
  /** The deleteClass mutation can be used to delete an existing object class. */
  deleteClass: Class;
  /** The deleteFilm mutation can be used to delete an object of the Film class. */
  deleteFilm: Film;
  /** The deletePlanet mutation can be used to delete an object of the Planet class. */
  deletePlanet: Planet;
  /** The deleteRole mutation can be used to delete an object of the Role class. */
  deleteRole: Role;
  /** The deleteSpecie mutation can be used to delete an object of the Specie class. */
  deleteSpecie: Specie;
  /** The deleteStarship mutation can be used to delete an object of the Starship class. */
  deleteStarship: Starship;
  /** The deleteUser mutation can be used to delete an object of the User class. */
  deleteUser: User;
  /** The deleteVehicle mutation can be used to delete an object of the Vehicle class. */
  deleteVehicle: Vehicle;
  /** The logIn mutation can be used to log the user in. */
  logIn: Viewer;
  /** The logOut mutation can be used to log the user out. */
  logOut: Viewer;
  /** The signUp mutation can be used to sign the user up. */
  signUp: Viewer;
  /** The updateCharacter mutation can be used to update an object of the Character class. */
  updateCharacter: Character;
  /** The updateClass mutation can be used to update the schema for an existing object class. */
  updateClass: Class;
  /** The updateFilm mutation can be used to update an object of the Film class. */
  updateFilm: Film;
  /** The updatePlanet mutation can be used to update an object of the Planet class. */
  updatePlanet: Planet;
  /** The updateRole mutation can be used to update an object of the Role class. */
  updateRole: Role;
  /** The updateSpecie mutation can be used to update an object of the Specie class. */
  updateSpecie: Specie;
  /** The updateStarship mutation can be used to update an object of the Starship class. */
  updateStarship: Starship;
  /** The updateUser mutation can be used to update an object of the User class. */
  updateUser: User;
  /** The updateVehicle mutation can be used to update an object of the Vehicle class. */
  updateVehicle: Vehicle;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateCharacterArgs = {
  fields?: InputMaybe<CreateCharacterFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateClassArgs = {
  name: Scalars['String'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateFileArgs = {
  upload: Scalars['Upload'];
};


/** Mutation is the top level type for mutations. */
export type MutationCreateFilmArgs = {
  fields?: InputMaybe<CreateFilmFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreatePlanetArgs = {
  fields?: InputMaybe<CreatePlanetFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateRoleArgs = {
  fields?: InputMaybe<CreateRoleFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateSpecieArgs = {
  fields?: InputMaybe<CreateSpecieFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateStarshipArgs = {
  fields?: InputMaybe<CreateStarshipFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateUserArgs = {
  fields?: InputMaybe<CreateUserFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateVehicleArgs = {
  fields?: InputMaybe<CreateVehicleFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteCharacterArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteClassArgs = {
  name: Scalars['String'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteFilmArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeletePlanetArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteSpecieArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteStarshipArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteVehicleArgs = {
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationLogInArgs = {
  fields?: InputMaybe<LogInFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationSignUpArgs = {
  fields?: InputMaybe<SignUpFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateCharacterArgs = {
  fields?: InputMaybe<UpdateCharacterFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateClassArgs = {
  name: Scalars['String'];
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateFilmArgs = {
  fields?: InputMaybe<UpdateFilmFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdatePlanetArgs = {
  fields?: InputMaybe<UpdatePlanetFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateRoleArgs = {
  fields?: InputMaybe<UpdateRoleFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateSpecieArgs = {
  fields?: InputMaybe<UpdateSpecieFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateStarshipArgs = {
  fields?: InputMaybe<UpdateStarshipFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateUserArgs = {
  fields?: InputMaybe<UpdateUserFieldsInput>;
  id: Scalars['ID'];
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateVehicleArgs = {
  fields?: InputMaybe<UpdateVehicleFieldsInput>;
  id: Scalars['ID'];
};

/** The NumberWhereInput input type is used in operations that involve filtering objects by a field of type Number. */
export type NumberWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Float']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Float']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Float']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The ObjectWhereInput input type is used in operations that involve filtering result by a field of type Object. */
export type ObjectWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<KeyValueInput>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<KeyValueInput>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<KeyValueInput>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The ParseObject interface type is used as a base type for the auto generated object types. */
export type ParseObject = {
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
};

/** The Planet object type is used in operations that involve outputting objects of Planet class. */
export type Planet = ParseObject & {
  __typename?: 'Planet';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
  climate?: Maybe<Array<Maybe<ArrayResult>>>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object diameter. */
  diameter?: Maybe<Scalars['Float']>;
  /** This is the object films. */
  films: FilmFindResult;
  /** This is the object gravity. */
  gravity?: Maybe<Scalars['String']>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object name. */
  name?: Maybe<Scalars['String']>;
  /** This is the object orbitalPeriod. */
  orbitalPeriod?: Maybe<Scalars['Float']>;
  /** This is the object population. */
  population?: Maybe<Scalars['Float']>;
  /** This is the object residents. */
  residents: CharacterFindResult;
  /** This is the object rotationPeriod. */
  rotationPeriod?: Maybe<Scalars['Float']>;
  /** This is the object species. */
  species: SpecieFindResult;
  /** This is the object surfaceWater. */
  surfaceWater?: Maybe<Scalars['Float']>;
  /** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
  terrain?: Maybe<Array<Maybe<ArrayResult>>>;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
};


/** The Planet object type is used in operations that involve outputting objects of Planet class. */
export type PlanetFilmsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<FilmOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilmWhereInput>;
};


/** The Planet object type is used in operations that involve outputting objects of Planet class. */
export type PlanetResidentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<CharacterOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};


/** The Planet object type is used in operations that involve outputting objects of Planet class. */
export type PlanetSpeciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SpecieOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecieWhereInput>;
};

/** The PlanetFindResult object type is used in the Planet find query to return the data of the matched objects. */
export type PlanetFindResult = {
  __typename?: 'PlanetFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Planet>;
};

/** The PlanetOrder input type is used when sorting objects of the Planet class. */
export enum PlanetOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  ClimateAsc = 'climate_ASC',
  ClimateDesc = 'climate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiameterAsc = 'diameter_ASC',
  DiameterDesc = 'diameter_DESC',
  FilmsAsc = 'films_ASC',
  FilmsDesc = 'films_DESC',
  GravityAsc = 'gravity_ASC',
  GravityDesc = 'gravity_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrbitalPeriodAsc = 'orbitalPeriod_ASC',
  OrbitalPeriodDesc = 'orbitalPeriod_DESC',
  PopulationAsc = 'population_ASC',
  PopulationDesc = 'population_DESC',
  ResidentsAsc = 'residents_ASC',
  ResidentsDesc = 'residents_DESC',
  RotationPeriodAsc = 'rotationPeriod_ASC',
  RotationPeriodDesc = 'rotationPeriod_DESC',
  SpeciesAsc = 'species_ASC',
  SpeciesDesc = 'species_DESC',
  SurfaceWaterAsc = 'surfaceWater_ASC',
  SurfaceWaterDesc = 'surfaceWater_DESC',
  TerrainAsc = 'terrain_ASC',
  TerrainDesc = 'terrain_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Planet class. */
export type PlanetPointerInput = {
  /** Create and link an object from Planet class. */
  createAndLink?: InputMaybe<CreatePlanetFieldsInput>;
  /** Link an existing object from Planet class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The PlanetPointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Planet class. */
export type PlanetPointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Planet class into a relation field. */
export type PlanetRelationInput = {
  /** Add an existing object from the Planet class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Planet class into the relation. */
  createAndAdd?: InputMaybe<Array<CreatePlanetFieldsInput>>;
  /** Remove an existing object from the Planet class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The PlanetWhereInput input type is used in operations that involve filtering objects of Planet class. */
export type PlanetWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<PlanetWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<PlanetWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<PlanetWhereInput>>;
  /** This is the object climate. */
  climate?: InputMaybe<ArrayWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object diameter. */
  diameter?: InputMaybe<NumberWhereInput>;
  /** This is the object gravity. */
  gravity?: InputMaybe<StringWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object orbitalPeriod. */
  orbitalPeriod?: InputMaybe<NumberWhereInput>;
  /** This is the object population. */
  population?: InputMaybe<NumberWhereInput>;
  /** This is the object rotationPeriod. */
  rotationPeriod?: InputMaybe<NumberWhereInput>;
  /** This is the object surfaceWater. */
  surfaceWater?: InputMaybe<NumberWhereInput>;
  /** This is the object terrain. */
  terrain?: InputMaybe<ArrayWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The PointerFieldInput is used to specify a field of type pointer for an object class schema. */
export type PointerFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String'];
};

/** The PolygonWhereInput input type is used in operations that involve filtering objects by a field of type Polygon. */
export type PolygonWhereInput = {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the geoIntersects operator to specify a constraint to select the objects where the values of a polygon field intersect a specified point. */
  geoIntersects?: InputMaybe<GeoIntersectsInput>;
};

/** Query is the top level type for queries. */
export type Query = {
  __typename?: 'Query';
  /** The character query can be used to get an object of the Character class by its id. */
  character: Character;
  /** The characters query can be used to find objects of the Character class. */
  characters: CharacterFindResult;
  /** The class query can be used to retrieve an existing object class. */
  class: Class;
  /** The classes query can be used to retrieve the existing object classes. */
  classes: Array<Class>;
  /** The film query can be used to get an object of the Film class by its id. */
  film: Film;
  /** The films query can be used to find objects of the Film class. */
  films: FilmFindResult;
  /** The health query can be used to check if the server is up and running. */
  health: Scalars['Boolean'];
  /** The planet query can be used to get an object of the Planet class by its id. */
  planet: Planet;
  /** The planets query can be used to find objects of the Planet class. */
  planets: PlanetFindResult;
  /** The role query can be used to get an object of the Role class by its id. */
  role: Role;
  /** The roles query can be used to find objects of the Role class. */
  roles: RoleFindResult;
  /** The specie query can be used to get an object of the Specie class by its id. */
  specie: Specie;
  /** The species query can be used to find objects of the Specie class. */
  species: SpecieFindResult;
  /** The starship query can be used to get an object of the Starship class by its id. */
  starship: Starship;
  /** The starships query can be used to find objects of the Starship class. */
  starships: StarshipFindResult;
  /** The user query can be used to get an object of the User class by its id. */
  user: User;
  /** The users query can be used to find objects of the User class. */
  users: UserFindResult;
  /** The vehicle query can be used to get an object of the Vehicle class by its id. */
  vehicle: Vehicle;
  /** The vehicles query can be used to find objects of the Vehicle class. */
  vehicles: VehicleFindResult;
  /** The viewer query can be used to return the current user data. */
  viewer: Viewer;
};


/** Query is the top level type for queries. */
export type QueryCharacterArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryCharactersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<CharacterOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryClassArgs = {
  name: Scalars['String'];
};


/** Query is the top level type for queries. */
export type QueryFilmArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryFilmsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<FilmOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilmWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryPlanetArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryPlanetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<PlanetOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanetWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryRoleArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


/** Query is the top level type for queries. */
export type QuerySpecieArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QuerySpeciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SpecieOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecieWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryStarshipArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryStarshipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<StarshipOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StarshipWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryUserArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryVehicleArgs = {
  id: Scalars['ID'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryVehiclesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<VehicleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VehicleWhereInput>;
};

/** The ReadOptionsInputt type is used in queries in order to set the read preferences. */
export type ReadOptionsInput = {
  /** The read preference for the queries to be executed to include fields. */
  includeReadPreference?: InputMaybe<ReadPreference>;
  /** The read preference for the main query to be executed. */
  readPreference?: InputMaybe<ReadPreference>;
  /** The read preference for the subqueries that may be required. */
  subqueryReadPreference?: InputMaybe<ReadPreference>;
};

/** The ReadPreference enum type is used in queries in order to select in which database replica the operation must run. */
export enum ReadPreference {
  Nearest = 'NEAREST',
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED'
}

/** The RelationFieldInput is used to specify a field of type relation for an object class schema. */
export type RelationFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String'];
};

/** The Role object type is used in operations that involve outputting objects of Role class. */
export type Role = ParseObject & {
  __typename?: 'Role';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object name. */
  name?: Maybe<Scalars['String']>;
  /** This is the object roles. */
  roles: RoleFindResult;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the object users. */
  users: UserFindResult;
};


/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

/** The RoleFindResult object type is used in the Role find query to return the data of the matched objects. */
export type RoleFindResult = {
  __typename?: 'RoleFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Role>;
};

/** The RoleOrder input type is used when sorting objects of the Role class. */
export enum RoleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC'
}

/** Allow to link OR add and link an object of the Role class. */
export type RolePointerInput = {
  /** Create and link an object from Role class. */
  createAndLink?: InputMaybe<CreateRoleFieldsInput>;
  /** Link an existing object from Role class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The RolePointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Role class. */
export type RolePointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Role class into a relation field. */
export type RoleRelationInput = {
  /** Add an existing object from the Role class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Role class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateRoleFieldsInput>>;
  /** Remove an existing object from the Role class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The RoleWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The SchemaACLField is used to return information of an ACL field. */
export type SchemaAclField = SchemaField & {
  __typename?: 'SchemaACLField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaArrayField is used to return information of an Array field. */
export type SchemaArrayField = SchemaField & {
  __typename?: 'SchemaArrayField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaArrayFieldInput is used to specify a field of type array for an object class schema. */
export type SchemaArrayFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaBooleanField is used to return information of a Boolean field. */
export type SchemaBooleanField = SchemaField & {
  __typename?: 'SchemaBooleanField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaBooleanFieldInput is used to specify a field of type boolean for an object class schema. */
export type SchemaBooleanFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaBytesField is used to return information of a Bytes field. */
export type SchemaBytesField = SchemaField & {
  __typename?: 'SchemaBytesField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaBytesFieldInput is used to specify a field of type bytes for an object class schema. */
export type SchemaBytesFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaDateField is used to return information of a Date field. */
export type SchemaDateField = SchemaField & {
  __typename?: 'SchemaDateField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaDateFieldInput is used to specify a field of type date for an object class schema. */
export type SchemaDateFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaField interface type is used as a base type for the different supported fields of an object class schema. */
export type SchemaField = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaFieldInput is used to specify a field of an object class schema. */
export type SchemaFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The CreateClassSchemaInput type is used to specify the schema for a new object class to be created. */
export type SchemaFieldsInput = {
  /** These are the Array fields to be added to the class schema. */
  addArrays?: InputMaybe<Array<SchemaArrayFieldInput>>;
  /** These are the Boolean fields to be added to the class schema. */
  addBooleans?: InputMaybe<Array<SchemaBooleanFieldInput>>;
  /** These are the Bytes fields to be added to the class schema. */
  addBytes?: InputMaybe<Array<SchemaBytesFieldInput>>;
  /** These are the Date fields to be added to the class schema. */
  addDates?: InputMaybe<Array<SchemaDateFieldInput>>;
  /** These are the File fields to be added to the class schema. */
  addFiles?: InputMaybe<Array<SchemaFileFieldInput>>;
  /** This is the Geo Point field to be added to the class schema. Currently it is supported only one GeoPoint field per Class. */
  addGeoPoint?: InputMaybe<SchemaGeoPointFieldInput>;
  /** These are the Number fields to be added to the class schema. */
  addNumbers?: InputMaybe<Array<SchemaNumberFieldInput>>;
  /** These are the Object fields to be added to the class schema. */
  addObjects?: InputMaybe<Array<SchemaObjectFieldInput>>;
  /** These are the Pointer fields to be added to the class schema. */
  addPointers?: InputMaybe<Array<PointerFieldInput>>;
  /** These are the Polygon fields to be added to the class schema. */
  addPolygons?: InputMaybe<Array<SchemaPolygonFieldInput>>;
  /** These are the Relation fields to be added to the class schema. */
  addRelations?: InputMaybe<Array<RelationFieldInput>>;
  /** These are the String fields to be added to the class schema. */
  addStrings?: InputMaybe<Array<SchemaStringFieldInput>>;
  /** These are the fields to be removed from the class schema. */
  remove?: InputMaybe<Array<SchemaFieldInput>>;
};

/** The SchemaFileField is used to return information of a File field. */
export type SchemaFileField = SchemaField & {
  __typename?: 'SchemaFileField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaFileFieldInput is used to specify a field of type file for an object class schema. */
export type SchemaFileFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaGeoPointField is used to return information of a Geo Point field. */
export type SchemaGeoPointField = SchemaField & {
  __typename?: 'SchemaGeoPointField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaGeoPointFieldInput is used to specify a field of type geo point for an object class schema. */
export type SchemaGeoPointFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaNumberField is used to return information of a Number field. */
export type SchemaNumberField = SchemaField & {
  __typename?: 'SchemaNumberField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaNumberFieldInput is used to specify a field of type number for an object class schema. */
export type SchemaNumberFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaObjectField is used to return information of an Object field. */
export type SchemaObjectField = SchemaField & {
  __typename?: 'SchemaObjectField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaObjectFieldInput is used to specify a field of type object for an object class schema. */
export type SchemaObjectFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaPointerField is used to return information of a Pointer field. */
export type SchemaPointerField = SchemaField & {
  __typename?: 'SchemaPointerField';
  /** This is the field name. */
  name: Scalars['String'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String'];
};

/** The SchemaPolygonField is used to return information of a Polygon field. */
export type SchemaPolygonField = SchemaField & {
  __typename?: 'SchemaPolygonField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaPolygonFieldInput is used to specify a field of type polygon for an object class schema. */
export type SchemaPolygonFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaRelationField is used to return information of a Relation field. */
export type SchemaRelationField = SchemaField & {
  __typename?: 'SchemaRelationField';
  /** This is the field name. */
  name: Scalars['String'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String'];
};

/** The SchemaStringField is used to return information of a String field. */
export type SchemaStringField = SchemaField & {
  __typename?: 'SchemaStringField';
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SchemaStringFieldInput is used to specify a field of type string for an object class schema. */
export type SchemaStringFieldInput = {
  /** This is the field name. */
  name: Scalars['String'];
};

/** The SearchInput type is used to specifiy a search operation on a full text search. */
export type SearchInput = {
  /** This is the flag to enable or disable case sensitive search. */
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
  /** This is the flag to enable or disable diacritic sensitive search. */
  diacriticSensitive?: InputMaybe<Scalars['Boolean']>;
  /** This is the language to tetermine the list of stop words and the rules for tokenizer. */
  language?: InputMaybe<Scalars['String']>;
  /** This is the term to be searched. */
  term: Scalars['String'];
};

/** The SelectInput type is used to specify an inQueryKey or a notInQueryKey operation on a constraint. */
export type SelectInput = {
  /** This is the key in the result of the subquery that must match (not match) the field. */
  key: Scalars['String'];
  /** This is the subquery to be executed. */
  query: SubqueryInput;
};

/** The SignUpFieldsInput input type is used in operations that involve inputting objects of User class when signing up. */
export type SignUpFieldsInput = {
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  /** This is the object password. */
  password: Scalars['String'];
  /** This is the object username. */
  username: Scalars['String'];
};

/** The Specie object type is used in operations that involve outputting objects of Specie class. */
export type Specie = ParseObject & {
  __typename?: 'Specie';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object averageHeight. */
  averageHeight?: Maybe<Scalars['Float']>;
  /** This is the object averageLifespan. */
  averageLifespan?: Maybe<Scalars['Float']>;
  /** This is the object classification. */
  classification?: Maybe<Scalars['String']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object designation. */
  designation?: Maybe<Scalars['String']>;
  /** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
  eyeColors?: Maybe<Array<Maybe<ArrayResult>>>;
  /** This is the object films. */
  films: FilmFindResult;
  /** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
  hairColors?: Maybe<Array<Maybe<ArrayResult>>>;
  /** This is the object homeworld. */
  homeworld?: Maybe<Planet>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object language. */
  language?: Maybe<Scalars['String']>;
  /** This is the object name. */
  name?: Maybe<Scalars['String']>;
  /** This is the object people. */
  people: CharacterFindResult;
  /** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
  skinColors?: Maybe<Array<Maybe<ArrayResult>>>;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
};


/** The Specie object type is used in operations that involve outputting objects of Specie class. */
export type SpecieFilmsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<FilmOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilmWhereInput>;
};


/** The Specie object type is used in operations that involve outputting objects of Specie class. */
export type SpeciePeopleArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<CharacterOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};

/** The SpecieFindResult object type is used in the Specie find query to return the data of the matched objects. */
export type SpecieFindResult = {
  __typename?: 'SpecieFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Specie>;
};

/** The SpecieOrder input type is used when sorting objects of the Specie class. */
export enum SpecieOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AverageHeightAsc = 'averageHeight_ASC',
  AverageHeightDesc = 'averageHeight_DESC',
  AverageLifespanAsc = 'averageLifespan_ASC',
  AverageLifespanDesc = 'averageLifespan_DESC',
  ClassificationAsc = 'classification_ASC',
  ClassificationDesc = 'classification_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DesignationAsc = 'designation_ASC',
  DesignationDesc = 'designation_DESC',
  EyeColorsAsc = 'eyeColors_ASC',
  EyeColorsDesc = 'eyeColors_DESC',
  FilmsAsc = 'films_ASC',
  FilmsDesc = 'films_DESC',
  HairColorsAsc = 'hairColors_ASC',
  HairColorsDesc = 'hairColors_DESC',
  HomeworldAsc = 'homeworld_ASC',
  HomeworldDesc = 'homeworld_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PeopleAsc = 'people_ASC',
  PeopleDesc = 'people_DESC',
  SkinColorsAsc = 'skinColors_ASC',
  SkinColorsDesc = 'skinColors_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Specie class. */
export type SpeciePointerInput = {
  /** Create and link an object from Specie class. */
  createAndLink?: InputMaybe<CreateSpecieFieldsInput>;
  /** Link an existing object from Specie class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The SpeciePointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Specie class. */
export type SpeciePointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Specie class into a relation field. */
export type SpecieRelationInput = {
  /** Add an existing object from the Specie class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Specie class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateSpecieFieldsInput>>;
  /** Remove an existing object from the Specie class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The SpecieWhereInput input type is used in operations that involve filtering objects of Specie class. */
export type SpecieWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<SpecieWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<SpecieWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<SpecieWhereInput>>;
  /** This is the object averageHeight. */
  averageHeight?: InputMaybe<NumberWhereInput>;
  /** This is the object averageLifespan. */
  averageLifespan?: InputMaybe<NumberWhereInput>;
  /** This is the object classification. */
  classification?: InputMaybe<StringWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object designation. */
  designation?: InputMaybe<StringWhereInput>;
  /** This is the object eyeColors. */
  eyeColors?: InputMaybe<ArrayWhereInput>;
  /** This is the object hairColors. */
  hairColors?: InputMaybe<ArrayWhereInput>;
  /** This is the object homeworld. */
  homeworld?: InputMaybe<PlanetPointerWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object language. */
  language?: InputMaybe<StringWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object skinColors. */
  skinColors?: InputMaybe<ArrayWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The Starship object type is used in operations that involve outputting objects of Starship class. */
export type Starship = ParseObject & {
  __typename?: 'Starship';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object MGLT. */
  MGLT?: Maybe<Scalars['Float']>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: Maybe<Scalars['Float']>;
  /** This is the object consumables. */
  consumables?: Maybe<Scalars['String']>;
  /** This is the object costInCredits. */
  costInCredits?: Maybe<Scalars['Float']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object crew. */
  crew?: Maybe<Scalars['Float']>;
  /** This is the object films. */
  films: FilmFindResult;
  /** This is the object hyperdriveRating. */
  hyperdriveRating?: Maybe<Scalars['Float']>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object length. */
  length?: Maybe<Scalars['Float']>;
  /** This is the object manufacturer. */
  manufacturer?: Maybe<Scalars['String']>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: Maybe<Scalars['Float']>;
  /** This is the object model. */
  model?: Maybe<Scalars['String']>;
  /** This is the object name. */
  name?: Maybe<Scalars['String']>;
  /** This is the object passengers. */
  passengers?: Maybe<Scalars['Float']>;
  /** This is the object pilots. */
  pilots: CharacterFindResult;
  /** This is the object starshipClass. */
  starshipClass?: Maybe<Scalars['String']>;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
};


/** The Starship object type is used in operations that involve outputting objects of Starship class. */
export type StarshipFilmsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<FilmOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilmWhereInput>;
};


/** The Starship object type is used in operations that involve outputting objects of Starship class. */
export type StarshipPilotsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<CharacterOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};

/** The StarshipFindResult object type is used in the Starship find query to return the data of the matched objects. */
export type StarshipFindResult = {
  __typename?: 'StarshipFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Starship>;
};

/** The StarshipOrder input type is used when sorting objects of the Starship class. */
export enum StarshipOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  MgltAsc = 'MGLT_ASC',
  MgltDesc = 'MGLT_DESC',
  CargoCapacityAsc = 'cargoCapacity_ASC',
  CargoCapacityDesc = 'cargoCapacity_DESC',
  ConsumablesAsc = 'consumables_ASC',
  ConsumablesDesc = 'consumables_DESC',
  CostInCreditsAsc = 'costInCredits_ASC',
  CostInCreditsDesc = 'costInCredits_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CrewAsc = 'crew_ASC',
  CrewDesc = 'crew_DESC',
  FilmsAsc = 'films_ASC',
  FilmsDesc = 'films_DESC',
  HyperdriveRatingAsc = 'hyperdriveRating_ASC',
  HyperdriveRatingDesc = 'hyperdriveRating_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  MaxAtmospheringSpeedAsc = 'maxAtmospheringSpeed_ASC',
  MaxAtmospheringSpeedDesc = 'maxAtmospheringSpeed_DESC',
  ModelAsc = 'model_ASC',
  ModelDesc = 'model_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PassengersAsc = 'passengers_ASC',
  PassengersDesc = 'passengers_DESC',
  PilotsAsc = 'pilots_ASC',
  PilotsDesc = 'pilots_DESC',
  StarshipClassAsc = 'starshipClass_ASC',
  StarshipClassDesc = 'starshipClass_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Starship class. */
export type StarshipPointerInput = {
  /** Create and link an object from Starship class. */
  createAndLink?: InputMaybe<CreateStarshipFieldsInput>;
  /** Link an existing object from Starship class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The StarshipPointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Starship class. */
export type StarshipPointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Starship class into a relation field. */
export type StarshipRelationInput = {
  /** Add an existing object from the Starship class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Starship class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateStarshipFieldsInput>>;
  /** Remove an existing object from the Starship class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The StarshipWhereInput input type is used in operations that involve filtering objects of Starship class. */
export type StarshipWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<StarshipWhereInput>>;
  /** This is the object MGLT. */
  MGLT?: InputMaybe<NumberWhereInput>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<StarshipWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<StarshipWhereInput>>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: InputMaybe<NumberWhereInput>;
  /** This is the object consumables. */
  consumables?: InputMaybe<StringWhereInput>;
  /** This is the object costInCredits. */
  costInCredits?: InputMaybe<NumberWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object crew. */
  crew?: InputMaybe<NumberWhereInput>;
  /** This is the object hyperdriveRating. */
  hyperdriveRating?: InputMaybe<NumberWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object length. */
  length?: InputMaybe<NumberWhereInput>;
  /** This is the object manufacturer. */
  manufacturer?: InputMaybe<StringWhereInput>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: InputMaybe<NumberWhereInput>;
  /** This is the object model. */
  model?: InputMaybe<StringWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object passengers. */
  passengers?: InputMaybe<NumberWhereInput>;
  /** This is the object starshipClass. */
  starshipClass?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The StringWhereInput input type is used in operations that involve filtering objects by a field of type String. */
export type StringWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: InputMaybe<Scalars['String']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: InputMaybe<Scalars['String']>;
  /** This is the $text operator to specify a full text search constraint. */
  text?: InputMaybe<TextInput>;
};

/** The SubqueryInput type is used to specify a sub query to another class. */
export type SubqueryInput = {
  /** This is the class name of the object. */
  className: Scalars['String'];
  /** These are the conditions that the objects need to match in order to be found */
  where: Scalars['Object'];
};

/** The TextInput type is used to specify a text operation on a constraint. */
export type TextInput = {
  /** This is the search to be executed. */
  search: SearchInput;
};

/** The UpdateCharacterFieldsInput input type is used in operations that involve creation of objects in the Character class. */
export type UpdateCharacterFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object birthYear. */
  birthYear?: InputMaybe<Scalars['String']>;
  /** This is the object eyeColor. */
  eyeColor?: InputMaybe<Scalars['String']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object gender. */
  gender?: InputMaybe<Scalars['String']>;
  /** This is the object hairColor. */
  hairColor?: InputMaybe<Scalars['String']>;
  /** This is the object height. */
  height?: InputMaybe<Scalars['Float']>;
  /** This is the object homeworld. */
  homeworld?: InputMaybe<PlanetPointerInput>;
  /** This is the object mass. */
  mass?: InputMaybe<Scalars['Float']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object skinColor. */
  skinColor?: InputMaybe<Scalars['String']>;
  /** This is the object species. */
  species?: InputMaybe<SpecieRelationInput>;
  /** This is the object starships. */
  starships?: InputMaybe<StarshipRelationInput>;
  /** This is the object vehicles. */
  vehicles?: InputMaybe<VehicleRelationInput>;
};

/** The UpdateFilmFieldsInput input type is used in operations that involve creation of objects in the Film class. */
export type UpdateFilmFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object characters. */
  characters?: InputMaybe<CharacterRelationInput>;
  /** This is the object director. */
  director?: InputMaybe<Scalars['String']>;
  /** This is the object episodeId. */
  episodeId?: InputMaybe<Scalars['Float']>;
  /** This is the object openingCrawl. */
  openingCrawl?: InputMaybe<Scalars['String']>;
  /** This is the object planets. */
  planets?: InputMaybe<PlanetRelationInput>;
  /** This is the object producer. */
  producer?: InputMaybe<Scalars['String']>;
  /** This is the object releaseDate. */
  releaseDate?: InputMaybe<Scalars['Date']>;
  /** This is the object species. */
  species?: InputMaybe<SpecieRelationInput>;
  /** This is the object starships. */
  starships?: InputMaybe<StarshipRelationInput>;
  /** This is the object title. */
  title?: InputMaybe<Scalars['String']>;
  /** This is the object vehicles. */
  vehicles?: InputMaybe<VehicleRelationInput>;
};

/** The UpdatePlanetFieldsInput input type is used in operations that involve creation of objects in the Planet class. */
export type UpdatePlanetFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object climate. */
  climate?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the object diameter. */
  diameter?: InputMaybe<Scalars['Float']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object gravity. */
  gravity?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object orbitalPeriod. */
  orbitalPeriod?: InputMaybe<Scalars['Float']>;
  /** This is the object population. */
  population?: InputMaybe<Scalars['Float']>;
  /** This is the object residents. */
  residents?: InputMaybe<CharacterRelationInput>;
  /** This is the object rotationPeriod. */
  rotationPeriod?: InputMaybe<Scalars['Float']>;
  /** This is the object species. */
  species?: InputMaybe<SpecieRelationInput>;
  /** This is the object surfaceWater. */
  surfaceWater?: InputMaybe<Scalars['Float']>;
  /** This is the object terrain. */
  terrain?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
};

/** The UpdateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type UpdateRoleFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationInput>;
};

/** The UpdateSpecieFieldsInput input type is used in operations that involve creation of objects in the Specie class. */
export type UpdateSpecieFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object averageHeight. */
  averageHeight?: InputMaybe<Scalars['Float']>;
  /** This is the object averageLifespan. */
  averageLifespan?: InputMaybe<Scalars['Float']>;
  /** This is the object classification. */
  classification?: InputMaybe<Scalars['String']>;
  /** This is the object designation. */
  designation?: InputMaybe<Scalars['String']>;
  /** This is the object eyeColors. */
  eyeColors?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object hairColors. */
  hairColors?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  /** This is the object homeworld. */
  homeworld?: InputMaybe<PlanetPointerInput>;
  /** This is the object language. */
  language?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object people. */
  people?: InputMaybe<CharacterRelationInput>;
  /** This is the object skinColors. */
  skinColors?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
};

/** The UpdateStarshipFieldsInput input type is used in operations that involve creation of objects in the Starship class. */
export type UpdateStarshipFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object MGLT. */
  MGLT?: InputMaybe<Scalars['Float']>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: InputMaybe<Scalars['Float']>;
  /** This is the object consumables. */
  consumables?: InputMaybe<Scalars['String']>;
  /** This is the object costInCredits. */
  costInCredits?: InputMaybe<Scalars['Float']>;
  /** This is the object crew. */
  crew?: InputMaybe<Scalars['Float']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object hyperdriveRating. */
  hyperdriveRating?: InputMaybe<Scalars['Float']>;
  /** This is the object length. */
  length?: InputMaybe<Scalars['Float']>;
  /** This is the object manufacturer. */
  manufacturer?: InputMaybe<Scalars['String']>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: InputMaybe<Scalars['Float']>;
  /** This is the object model. */
  model?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object passengers. */
  passengers?: InputMaybe<Scalars['Float']>;
  /** This is the object pilots. */
  pilots?: InputMaybe<CharacterRelationInput>;
  /** This is the object starshipClass. */
  starshipClass?: InputMaybe<Scalars['String']>;
};

/** The UpdateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type UpdateUserFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  /** This is the object password. */
  password?: InputMaybe<Scalars['String']>;
  /** This is the object username. */
  username?: InputMaybe<Scalars['String']>;
};

/** The UpdateVehicleFieldsInput input type is used in operations that involve creation of objects in the Vehicle class. */
export type UpdateVehicleFieldsInput = {
  /** This is the access control list of the object. */
  ACL?: InputMaybe<Scalars['Object']>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: InputMaybe<Scalars['Float']>;
  /** This is the object consumables. */
  consumables?: InputMaybe<Scalars['String']>;
  /** This is the object costInCredits. */
  costInCredits?: InputMaybe<Scalars['Float']>;
  /** This is the object crew. */
  crew?: InputMaybe<Scalars['Float']>;
  /** This is the object films. */
  films?: InputMaybe<FilmRelationInput>;
  /** This is the object length. */
  length?: InputMaybe<Scalars['Float']>;
  /** This is the object manufacturer. */
  manufacturer?: InputMaybe<Scalars['String']>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: InputMaybe<Scalars['Float']>;
  /** This is the object model. */
  model?: InputMaybe<Scalars['String']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']>;
  /** This is the object passengers. */
  passengers?: InputMaybe<Scalars['Float']>;
  /** This is the object pilots. */
  pilots?: InputMaybe<CharacterRelationInput>;
  /** This is the object vehicleClass. */
  vehicleClass?: InputMaybe<Scalars['String']>;
};

/** The User object type is used in operations that involve outputting objects of User class. */
export type User = ParseObject & {
  __typename?: 'User';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object email. */
  email?: Maybe<Scalars['String']>;
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the object username. */
  username?: Maybe<Scalars['String']>;
};

/** The UserFindResult object type is used in the User find query to return the data of the matched objects. */
export type UserFindResult = {
  __typename?: 'UserFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<User>;
};

/** The UserOrder input type is used when sorting objects of the User class. */
export enum UserOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

/** Allow to link OR add and link an object of the User class. */
export type UserPointerInput = {
  /** Create and link an object from User class. */
  createAndLink?: InputMaybe<CreateUserFieldsInput>;
  /** Link an existing object from User class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The UserPointerWhereInput input type is used in operations that involve filtering objects by a pointer field to User class. */
export type UserPointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the User class into a relation field. */
export type UserRelationInput = {
  /** Add an existing object from the User class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the User class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateUserFieldsInput>>;
  /** Remove an existing object from the User class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The UserWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<UserWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** This is the object authData. */
  authData?: InputMaybe<ObjectWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object email. */
  email?: InputMaybe<StringWhereInput>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<BooleanWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object password. */
  password?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object username. */
  username?: InputMaybe<StringWhereInput>;
};

/** The Vehicle object type is used in operations that involve outputting objects of Vehicle class. */
export type Vehicle = ParseObject & {
  __typename?: 'Vehicle';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: Maybe<Scalars['Float']>;
  /** This is the object consumables. */
  consumables?: Maybe<Scalars['String']>;
  /** This is the object costInCredits. */
  costInCredits?: Maybe<Scalars['Float']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object crew. */
  crew?: Maybe<Scalars['Float']>;
  /** This is the object films. */
  films: FilmFindResult;
  /** This is the object id. */
  id: Scalars['ID'];
  /** This is the object length. */
  length?: Maybe<Scalars['Float']>;
  /** This is the object manufacturer. */
  manufacturer?: Maybe<Scalars['String']>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: Maybe<Scalars['Float']>;
  /** This is the object model. */
  model?: Maybe<Scalars['String']>;
  /** This is the object name. */
  name?: Maybe<Scalars['String']>;
  /** This is the object passengers. */
  passengers?: Maybe<Scalars['Float']>;
  /** This is the object pilots. */
  pilots: CharacterFindResult;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the object vehicleClass. */
  vehicleClass?: Maybe<Scalars['String']>;
};


/** The Vehicle object type is used in operations that involve outputting objects of Vehicle class. */
export type VehicleFilmsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<FilmOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilmWhereInput>;
};


/** The Vehicle object type is used in operations that involve outputting objects of Vehicle class. */
export type VehiclePilotsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<CharacterOrder>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterWhereInput>;
};

/** The VehicleFindResult object type is used in the Vehicle find query to return the data of the matched objects. */
export type VehicleFindResult = {
  __typename?: 'VehicleFindResult';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int'];
  /** This is the objects returned by the query */
  results: Array<Vehicle>;
};

/** The VehicleOrder input type is used when sorting objects of the Vehicle class. */
export enum VehicleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CargoCapacityAsc = 'cargoCapacity_ASC',
  CargoCapacityDesc = 'cargoCapacity_DESC',
  ConsumablesAsc = 'consumables_ASC',
  ConsumablesDesc = 'consumables_DESC',
  CostInCreditsAsc = 'costInCredits_ASC',
  CostInCreditsDesc = 'costInCredits_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CrewAsc = 'crew_ASC',
  CrewDesc = 'crew_DESC',
  FilmsAsc = 'films_ASC',
  FilmsDesc = 'films_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  ManufacturerAsc = 'manufacturer_ASC',
  ManufacturerDesc = 'manufacturer_DESC',
  MaxAtmospheringSpeedAsc = 'maxAtmospheringSpeed_ASC',
  MaxAtmospheringSpeedDesc = 'maxAtmospheringSpeed_DESC',
  ModelAsc = 'model_ASC',
  ModelDesc = 'model_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PassengersAsc = 'passengers_ASC',
  PassengersDesc = 'passengers_DESC',
  PilotsAsc = 'pilots_ASC',
  PilotsDesc = 'pilots_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VehicleClassAsc = 'vehicleClass_ASC',
  VehicleClassDesc = 'vehicleClass_DESC'
}

/** Allow to link OR add and link an object of the Vehicle class. */
export type VehiclePointerInput = {
  /** Create and link an object from Vehicle class. */
  createAndLink?: InputMaybe<CreateVehicleFieldsInput>;
  /** Link an existing object from Vehicle class. */
  link?: InputMaybe<Scalars['ID']>;
};

/** The VehiclePointerWhereInput input type is used in operations that involve filtering objects by a pointer field to Vehicle class. */
export type VehiclePointerWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the inQuery operator to specify a constraint to select the objects where a field equals to any of the ids in the result of a different query. */
  inQuery?: InputMaybe<SubqueryInput>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  /** This is the notInQuery operator to specify a constraint to select the objects where a field do not equal to any of the ids in the result of a different query. */
  notInQuery?: InputMaybe<SubqueryInput>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Allow to add, remove, createAndAdd objects of the Vehicle class into a relation field. */
export type VehicleRelationInput = {
  /** Add an existing object from the Vehicle class into the relation. */
  add?: InputMaybe<Array<Scalars['ID']>>;
  /** Create and add an object of the Vehicle class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateVehicleFieldsInput>>;
  /** Remove an existing object from the Vehicle class out of the relation. */
  remove?: InputMaybe<Array<Scalars['ID']>>;
};

/** The VehicleWhereInput input type is used in operations that involve filtering objects of Vehicle class. */
export type VehicleWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<VehicleWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<VehicleWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<VehicleWhereInput>>;
  /** This is the object cargoCapacity. */
  cargoCapacity?: InputMaybe<NumberWhereInput>;
  /** This is the object consumables. */
  consumables?: InputMaybe<StringWhereInput>;
  /** This is the object costInCredits. */
  costInCredits?: InputMaybe<NumberWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object crew. */
  crew?: InputMaybe<NumberWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<StringWhereInput>;
  /** This is the object length. */
  length?: InputMaybe<NumberWhereInput>;
  /** This is the object manufacturer. */
  manufacturer?: InputMaybe<StringWhereInput>;
  /** This is the object maxAtmospheringSpeed. */
  maxAtmospheringSpeed?: InputMaybe<NumberWhereInput>;
  /** This is the object model. */
  model?: InputMaybe<StringWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object passengers. */
  passengers?: InputMaybe<NumberWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object vehicleClass. */
  vehicleClass?: InputMaybe<StringWhereInput>;
};

/** The Viewer object type is used in operations that involve outputting the current user data. */
export type Viewer = ParseObject & {
  __typename?: 'Viewer';
  /** This is the access control list of the object. */
  ACL?: Maybe<Scalars['Object']>;
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date'];
  /** This is the object email. */
  email?: Maybe<Scalars['String']>;
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** This is the object id. */
  id: Scalars['ID'];
  /** The user session token */
  sessionToken: Scalars['String'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date'];
  /** This is the object username. */
  username?: Maybe<Scalars['String']>;
};

/** The WithinInput type is used to specify a within operation on a constraint. */
export type WithinInput = {
  /** This is the box to be specified. */
  box: BoxInput;
};

export type GetMovieQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieQuery = { __typename?: 'Query', films: { __typename?: 'FilmFindResult', results: Array<{ __typename?: 'Film', id: string, releaseDate?: any | null, title?: string | null, characters: { __typename?: 'CharacterFindResult', count: number }, planets: { __typename?: 'PlanetFindResult', count: number } }> } };

export type FetchMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMoviesQuery = { __typename?: 'Query', films: { __typename?: 'FilmFindResult', results: Array<{ __typename?: 'Film', id: string, releaseDate?: any | null, title?: string | null, characters: { __typename?: 'CharacterFindResult', count: number, results: Array<{ __typename?: 'Character', name?: string | null }> }, planets: { __typename?: 'PlanetFindResult', count: number, results: Array<{ __typename?: 'Planet', name?: string | null }> } }> } };


export const GetMovieDocument = gql`
    query GetMovie {
  films {
    results {
      id
      releaseDate
      title
      characters {
        count
      }
      planets {
        count
      }
    }
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions?: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const FetchMoviesDocument = gql`
    query FetchMovies {
  films(order: releaseDate_ASC) {
    results {
      id
      releaseDate
      title
      characters {
        count
        results {
          name
        }
      }
      planets {
        count
        results {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useFetchMoviesQuery__
 *
 * To run a query within a React component, call `useFetchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMoviesQuery(baseOptions?: Apollo.QueryHookOptions<FetchMoviesQuery, FetchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMoviesQuery, FetchMoviesQueryVariables>(FetchMoviesDocument, options);
      }
export function useFetchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMoviesQuery, FetchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMoviesQuery, FetchMoviesQueryVariables>(FetchMoviesDocument, options);
        }
export type FetchMoviesQueryHookResult = ReturnType<typeof useFetchMoviesQuery>;
export type FetchMoviesLazyQueryHookResult = ReturnType<typeof useFetchMoviesLazyQuery>;
export type FetchMoviesQueryResult = Apollo.QueryResult<FetchMoviesQuery, FetchMoviesQueryVariables>;