import * as graphqlTools from 'graphql-tools';

const { makeExecutableSchema } = graphqlTools;
const  { addMockFunctionsToSchema } = graphqlTools;
const { mockServer } = graphqlTools;
  
const schemaString = `type Mutation {
	signup(email: String!, password: String!, firstName: String!, lastName: String!): User!
	signin(email: String!, password: String!): User!
	signout: Message
	createEvent(title: String!, description: String!): Event!
	deleteEvent(where: EventWhereUniqueInput!): Event
	requestReset(email: String!): Message
	resetPassword(resetToken: String!, password: String!, confirmPassword: String!): User!
	updatePermissions(permissions: [Permission], userId: ID!): User
}

type Query {
	users: [User]!
	events: [Event]!
	getEvents(genre: String): [Event]
	getEvent(id: String!): Event
	currentUser: User
	user(where: UserWhereUniqueInput!): User
}

type User {
	id: ID!
	firstName: String!
	lastName: String!
	email: String!
	zipcode: String
	gender: Gender
	password: String
	permissions: [Permission!]!
	interests: [Category]
	events: [Event]
	createdAt: DateTime!
	updatedAt: DateTime!
}

type Event {
	id: ID!
	title: String!
	details: Details
	location: Location
	image_url: String
}

type Location {
	region: String
	venue: String
	address: String
	zipCode: String
}

type Details {
	url: String
	performer: String
	description: String
	start_time: String
	bio: String
	tags: [Tag] ## can only query tags on single events
}

type Tag {
	id: String
	title: String
	owner: String
}

type Message {
	body: String
}`;


const schema = makeExecutableSchema({ typeDefs: schemaString });


const testCaseA = {
    id: 'Test case A',
    query: `
      query {
        event {
           title
        }
      }
    `,
    variables: { },
    context: { },
    expected: { data: { event: [{ title: 'Awesome Concert' }] } }
  };
  
  describe('Schema', () => {
    // Array of case types
    const cases = [testCaseA];
    
    const mockSchema = makeExecutableSchema({ typeDefs });
  
    // Here we specify the return payloads of mocked types
    addMockFunctionsToSchema({
      schema: mockSchema,
      mocks: {
        Boolean: () => false,
        ID: () => '1',
        Int: () => 1,
        Float: () => 12.34,
        String: () => 'Awesome Concert',
      }
    });
  
    test('has valid type definitions', async () => {
      expect(async () => {
        const MockServer = mockServer(typeDefs);
  
        await MockServer.query(`{ __schema { types { name } } }`);
      }).not.toThrow();
    });
  
    cases.forEach(obj => {
      const { id, query, variables, context: ctx, expected } = obj;
  
      test(`query: ${id}`, async () => {
        return await expect(
          graphql(mockSchema, query, null, { ctx }, variables)
        ).resolves.toEqual(expected);
      });
    });
  
  });