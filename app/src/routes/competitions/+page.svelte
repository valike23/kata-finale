<script lang="ts">
	import Topbar from "$lib/components/Topbar.svelte";
import { db, type Competition } from "$lib/db";
	import dayjs from "dayjs";
	import { Button, Input, Label, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
	import { onMount } from "svelte";
    import { UserSolid, ChartMixedOutline, AwardSolid } from "flowbite-svelte-icons";
    let competition:Competition = {};
    let competitions: Competition[] = [];
    const getCompetitions =async ()=>competitions = await db.competitions.toArray();
    
onMount(async ()=>{
  await getCompetitions();
})
const handleSubmit =async ()=>{
    const resp = await db.competitions.add(competition);
    console.log(resp);
    competition = {};
    alert("the competition was created");
    if(resp) await getCompetitions();
}
</script>
<div>
    <Topbar activeTab='dashboard'/>
    <div class="container mx-auto   p-8">
        <h2>Manage Competitions</h2>
        <form on:submit={handleSubmit}>
            <div class="flex">
                <div class="flex-1 p-2">
                    <div class="mb-6">
                        <Label for="name" class="block mb-2">Competition Name</Label>
                        <Input bind:value={competition.name} required id="name" placeholder="Enter the competition name" />
                      </div>
                </div>
                <div class="flex-1 p-2">
                    <div class="mb-6">
                        <Label for="start" class="block mb-2">Competition Date</Label>
                        <Input bind:value={competition.startDate} required type="date" id="start" placeholder="Enter the competition start date" />
                      </div>
                </div>
              </div>

              <div class="flex">
                <div class="flex-2">
                    <Button type="submit">submit</Button>
                </div>
              </div>
              
        </form>

        <div class="mt-9">
            <Table>
                <TableHead>
                  <TableHeadCell>id</TableHeadCell>
                  <TableHeadCell>name</TableHeadCell>
                  <TableHeadCell>start date</TableHeadCell>
                  <TableHeadCell>Actions</TableHeadCell>
                </TableHead>
                <TableBody tableBodyClass="divide-y">
                 {#each competitions as compt, id }
                 <TableBodyRow>
                    <TableBodyCell>{compt.id}</TableBodyCell>
                    <TableBodyCell>{compt.name}</TableBodyCell>
                    <TableBodyCell>{dayjs(compt.startDate).format('YYYY-MM-DD')}</TableBodyCell>
                    <TableBodyCell>
                        <Button size="sm" title="manage athelete"> <UserSolid></UserSolid> </Button>
                        <Button color="light" size="sm" title="manage categories"> <ChartMixedOutline></ChartMixedOutline> </Button> 
                        <Button color="purple" size="sm" title="manage Drafts"> <AwardSolid></AwardSolid> </Button>
                    </TableBodyCell>
                  </TableBodyRow>
                 {/each}
                 
                 
                </TableBody>
              </Table>
        </div>
    </div>
    
</div>