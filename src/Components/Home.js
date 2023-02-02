// import React, { useState, useEffect } from "react";
// import {SimpleGrid,Text,Button,Box,HStack,Stack} from "@chakra-ui/react"
// import Showdata from "./Showdata"
// function Home() {
//   const [data, setData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState({});
//   const [showDetails, setShowDetails] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage] = useState(4);
//   const [open, setopen] = useState(false);
  

//     useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);


//   const handleClick = (user) => {
//     setSelectedUser(user);
//     setShowDetails(true);
//   };

// const indexOfLastData = currentPage * perPage;
// const indexOfFirstData = indexOfLastData - perPage;
// const currentData = data.slice(indexOfFirstData, indexOfLastData);

// const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

// const pageNumbers = [];
// for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
//   pageNumbers.push(i);
// }

//   return (
//     <SimpleGrid>
//       <h1>Users</h1>
//       <HStack pt={2} justifyContent={"center"} alignItems="center">
//         {pageNumbers?.map((number, ind) => (
//           <Button
//             colorScheme={number === currentPage ? "red" : "facebook"}
//             key={ind}
//             value={number}
//             onClick={() => handlePagination(number)}
//           >
//             {number}
//           </Button>
//         ))}
//       </HStack>

//       <ul>
//         {currentData.map((user) => (
//           <SimpleGrid
//             margin="12px 8px"
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             bgcolor="white"
//             padding="12px"
//             borderRadius="10px"
//             height={"80px"}
//             mt="10"
//             key={user.id}
//             cursor={"pointer"}
//             boxShadow={"md"}
//           >
//             <Stack
//               spacing={1}
//               sx={{
//                 width: "15%",
//               }}
//             >
//               <Text
//                 key={user}
//                 variant="h5"
//                 sx={{ fontWeight: "bold" }}
//                 cursor={"pointer"}
//               >
//                 Name
//               </Text>
//               <Text variant="h6">{user.name}</Text>
//             </Stack>
//             <Stack
//               spacing={1}
//               sx={{
//                 width: "15%",
//               }}
//             >
//               <Text
//                 key={user}
//                 variant="h5"
//                 sx={{ fontWeight: "bold" }}
//                 cursor={"pointer"}
//               >
//                 Email
//               </Text>
//               <Text key={user} cursor={"pointer"}>
//                 {user.email}
//               </Text>
//             </Stack>

//             <Stack
//               spacing={1}
//               sx={{
//                 width: "15%",
//               }}
//             >
//               <Text
//                 key={user}
//                 variant="h5"
//                 sx={{ fontWeight: "bold" }}
//                 cursor={"pointer"}
//               >
//                 Address
//               </Text>
//               <Text key={user} cursor={"pointer"}>
//                 {user.address.city}
//               </Text>
//             </Stack>

//             <Stack
//               spacing={1}
//               sx={{
//                 width: "15%",
//               }}
//             >
//               <Text
//                 key={user}
//                 variant="h5"
//                 sx={{ fontWeight: "bold" }}
//                 cursor={"pointer"}
//               >
//                 State
//               </Text>
//               <Text key={user} cursor={"pointer"}>
//                 {user.address.street}
//               </Text>
//             </Stack>

//             <Stack
//               spacing={1}
//               sx={{
//                 width: "15%",
//               }}
//             >
//               <Text
//                 key={user}
//                 variant="h5"
//                 sx={{ fontWeight: "bold" }}
//                 cursor={"pointer"}
//               >
//                 Contact Number
//               </Text>
//               <Text key={user} cursor={"pointer"}>
//                 {user.phone}
//               </Text>
//             </Stack>

//             <Stack>
//               <Button
//                 onClick={() => setopen(currentData)}
//                 variant="contained"
//                 color="red"
//                 sx={{
//                   borderRadius: "12px",
//                 }}
//               >
//                 {open ? "Hide Details" : "Show Details"}
//               </Button>
//             </Stack>
//             {open ? <Showdata value={currentData} /> : " "}
//           </SimpleGrid>
//         ))}
//       </ul>
//     </SimpleGrid>
//   );
// }



// export default Home




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, SimpleGrid, Button, Flex, Heading, Text, Stack } from "@chakra-ui/react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleShowDetails = (id) => {
    setShowDetails({
      ...showDetails,
      [id]: !showDetails[id],
    });
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box
      m={"auto"}
      borderRadius={"20px"}
      box-shadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    >
      <Heading as="h1" size="lg">
        Users
      </Heading>
      {currentUsers.map((user) => (
        <SimpleGrid
          columns={5}
          ml="100px"
          width={"1100px"}
          box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          pb={"20px"}
          pt="20px"
        >
          <Text
            w={"300px"}
            mr={"20px"}
            textAlign="start"
            fontFamily={"sans-serif"}
          >
            Name: {user.name}
          </Text>
          <Text
            w={"300px"}
            ml="50px"
            fontFamily={"sans-serif"}
            textAlign="start"
          >
            Username: {user.username}
          </Text>
          <Text
            ml="150px"
            w={"300px"}
            fontFamily={"sans-serif"}
            textAlign="start"
          >
            Email: {user.email}
          </Text>
          <Button
            bg={showDetails[user.id] ? "red" : "red"}
            h="40px"
            width={"150px"}
            mt="10px"
            ml={"300px"}
            borderRadius="35px"
            onClick={() => handleShowDetails(user.id)}
          >
            {showDetails[user.id] ? "Hide Details" : "View Details"}
          </Button>
          {showDetails[user.id] && (
            <SimpleGrid
              height="400px"
              width={"1200px"}
              mt="70"
              position={"relative"}
              left="-930px"
              cursor={"pointer"}
              borderRadius={"15px"}
              boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
              }
            >
              <SimpleGrid
                mt={"40px"}
                ml="30px"
                width={"100%"}
                columns={4}
                spacing="5"
              >
                <Box spacing={1} sx={{}}>
                  <Text
                    key={user}
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    cursor={"pointer"}
                  >
                    Name
                  </Text>
                  <Text variant="h6"> {user.name}</Text>
                </Box>

                <Box spacing={1} sx={{}}>
                  <Text
                    key={user}
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    cursor={"pointer"}
                  >
                    Username
                  </Text>
                  <Text variant="h6">{user.username}</Text>
                </Box>

                <Box spacing={1} sx={{}}>
                  <Text
                    key={user}
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    cursor={"pointer"}
                  >
                    Email
                  </Text>
                  <Text variant="h6">{user.email}</Text>
                </Box>

                <Box spacing={1} sx={{}}>
                  <Text
                    key={user}
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    cursor={"pointer"}
                  >
                    Phone
                  </Text>
                  <Text variant="h6">{user.phone}</Text>
                </Box>

                <Box spacing={1} sx={{}}>
                  <Text
                    key={user}
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    cursor={"pointer"}
                  >
                    Website
                  </Text>
                  <Text variant="h6">{user.website}</Text>
                </Box>

                <Box spacing={1} sx={{}}>
                  <Text
                    key={user}
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    cursor={"pointer"}
                  >
                    Address:
                  </Text>
                  <Text variant="h6">
                    {" "}
                    {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}
                  </Text>
                </Box>
              </SimpleGrid>
            </SimpleGrid>
          )}
        </SimpleGrid>
      ))}

      <Flex justifyContent="center" marginY={5}>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            width="50px"
            h={"50px"}
            mt="50px"
            mr="10px"
            mb="50px"
            alignitem="center"
            onClick={() => handlePageChange(number)}
            colorScheme={number === currentPage ? "red" : "facebook"}
          >
            {number}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;