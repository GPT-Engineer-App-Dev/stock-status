import { Box, Container, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5">
      <VStack spacing={8} align="stretch">
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl">Financial News</Heading>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h2" size="lg" mb={4}>Headlines</Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Heading as="h3" size="md">Headline 1</Heading>
                  <Text>Summary of the headline 1...</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="md">Headline 2</Heading>
                  <Text>Summary of the headline 2...</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="md">Headline 3</Heading>
                  <Text>Summary of the headline 3...</Text>
                </Box>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
              <VStack spacing={4} align="stretch">
                <Box>
                  <Heading as="h3" size="md">Market 1</Heading>
                  <Text>Details of market 1...</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="md">Market 2</Heading>
                  <Text>Details of market 2...</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="md">Market 3</Heading>
                  <Text>Details of market 3...</Text>
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem>
              <Box>
                <Image src="https://via.placeholder.com/150" alt="Article 1" mb={2} />
                <Heading as="h3" size="md">Article 1</Heading>
                <Text>Summary of article 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image src="https://via.placeholder.com/150" alt="Article 2" mb={2} />
                <Heading as="h3" size="md">Article 2</Heading>
                <Text>Summary of article 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Image src="https://via.placeholder.com/150" alt="Article 3" mb={2} />
                <Heading as="h3" size="md">Article 3</Heading>
                <Text>Summary of article 3...</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;