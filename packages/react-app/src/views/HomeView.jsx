import React, { useMemo } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import ChallengeExpandedCard from "../components/ChallengeExpandedCard";
import { challengeInfo } from "../data/challenges";
import useCustomColorModes from "../hooks/useCustomColorModes";
import { CHALLENGE_SUBMISSION_STATUS } from "../helpers/constants";

export default function HomeView({ connectedBuilder }) {
  const { primaryFontColor } = useCustomColorModes();

  const builderCompletedChallenges = useMemo(() => {
    if (!connectedBuilder?.challenges) {
      return [];
    }

    return Object.keys(connectedBuilder.challenges).filter(
      challengeId => connectedBuilder.challenges[challengeId].status === CHALLENGE_SUBMISSION_STATUS.ACCEPTED,
    );
  }, [connectedBuilder]);

  return (
    <Container maxW="container.lg" centerContent>
      <div style={{width:740,margin:"auto",border:"1px solid #DDDDDD", padding:32, marginBottom:64}}>
      <Text color={primaryFontColor} mb="6" fontSize="xl" textAlign="center">
        <span role="img" aria-label="teacher icon">
          👩‍🏫
        </span>{" "}
        Learn how to build on Ethereum; the superpowers and the gotchas.
      </Text>

      <Text color={primaryFontColor} mb="2" fontSize="xl" textAlign="center">
        Use {" "}
        <a href="https://github.com/scaffold-eth/scaffold-eth#-scaffold-eth" target="_blank"><span role="img" aria-label="teacher icon">
          🏗
        </span>{" "}
        Scaffold-ETH</a> to copy/paste each Solidity concept and tinker:
      </Text>

      <Text color={primaryFontColor} mb="8" fontSize="xl" textAlign="center">
        <div>
          <a href="https://docs.soliditylang.org/en/v0.6.6/units-and-global-variables.html" target="_blank">global units</a>, <a href="https://solidity-by-example.org/primitives/">primitives</a>, <a href="https://solidity-by-example.org/mapping/">mappings</a>,
         {" "}<a href="https://solidity-by-example.org/structs/" target="_blank">structs</a>, <a href="https://solidity-by-example.org/function-modifier/" target="_blank">modifiers</a>, <a href="https://solidity-by-example.org/events/" target="_blank">events</a>,</div> <a href="https://solidity-by-example.org/inheritance/" target="_blank">inheritance</a>, <a href="https://solidity-by-example.org/sending-ether/" target="_blank">sending eth</a>, and <a href="https://solidity-by-example.org/payable/" target="_blank">payable</a>/<a href="https://solidity-by-example.org/fallback/" target="_blank">fallback</a> functions.
      </Text>
      <Text color={primaryFontColor} mb="0" fontSize="xl" textAlign="center">
        <span role="img" aria-label="teacher icon">
          🧑‍🚀
        </span>{" "}
        When you are ready to test your knowledge, speed run Ethereum:
      </Text>
      </div>


      <Box>
        {Object.entries(challengeInfo).map(([challengeId, challenge], index) => (
          <ChallengeExpandedCard
            challengeId={challengeId}
            challenge={challenge}
            challengeIndex={index}
            builderCompletedChallenges={builderCompletedChallenges}
          />
        ))}
      </Box>
    </Container>
  );
}
